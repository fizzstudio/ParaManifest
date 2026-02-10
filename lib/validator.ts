/* ParaManifest: Validator
Copyright (C) 2025 Fizz Studios

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.*/

// * Imports *

// External Imports

import { validate, registerSchema, OutputUnit, SchemaObject, hasSchema } from '@hyperjump/json-schema/draft-2020-12';
import { BASIC } from '@hyperjump/json-schema/experimental';
import { Json } from '@hyperjump/json-pointer';

import jp from 'jsonpath';

// Internal JSON Imports

import JIM_MANIFEST_SCHEMA from '../schema/jim_manifest.schema.json';
import MANIFEST_SCHEMA from '../schema/manifest_bundle.schema.json';

// * Helpers *

// Constants

const JIM_MANIFEST_SCHEMA_ID = JIM_MANIFEST_SCHEMA.$id;
const MANIFEST_SCHEMA_ID = MANIFEST_SCHEMA.$id;

// Types

export type ValidateOutput = {
  valid: boolean,
  errors?: string
}

// * Main Class *

/**
 * Validates JSON files against the Manifest schema
 */
export class ManifestValidator {
  /**
   * Construct an instance of ManifestValidator.
   * @constructor
   */
  constructor() { 
    if (!hasSchema(JIM_MANIFEST_SCHEMA_ID)) {
      registerSchema(JIM_MANIFEST_SCHEMA);
    }
    if (!hasSchema(MANIFEST_SCHEMA_ID)) {
      registerSchema(MANIFEST_SCHEMA);
    }
  }

  private _convertToJsonPath(location: string): string {
    return location.replace('#', '$')
      .replaceAll('/', '.')
      .replaceAll(/(\d)/g, '[$1]')
      .replaceAll('$defs', "['$defs']")
      .replaceAll('.[', '[');
  }

  // TODO: if the Error Keyword is keyword/required, work out & print which keyword is missing
  private _prettyPrintValidationError(
    instance: Json, validatorOutput: OutputUnit, schema: Json
  ): string {
    const immediateError = validatorOutput.errors!.at(-1)!;
    const errorKeyword = immediateError.keyword.slice(24);
    const locationParts = immediateError.absoluteKeywordLocation.split('#');
    //const locationId = locationParts[0];
    //const schema = this.subschemaMap[locationId];
    const schemaPath = this._convertToJsonPath('$' + locationParts[1]);
    const errorPath = this._convertToJsonPath(immediateError.instanceLocation);
    let immediateSchema;
    let errorInstance;
    try {
      immediateSchema = jp.query(schema, schemaPath);
      errorInstance = jp.query(instance, errorPath);
    } catch (err) {
      return `Error in JSONPath when attempting to pretty print validation error: ${err}`;
    }
    let errorMsg;
    if (errorKeyword === 'keyword/required') {
      const existingPropKeys = Object.keys(errorInstance[0]);
      const missingKeys = [];
      for (const requiredKey of immediateSchema[0]) {
        if (!(existingPropKeys.includes(requiredKey))) {
          missingKeys.push(requiredKey);
        }
      };
      errorMsg = `
      The following required properties are missing: ${missingKeys.join()}
      `
    }
    return `
      Error Keyword: ${errorKeyword}
      Schema: ${JSON.stringify(immediateSchema)}
      Schema Path: ${schemaPath}${errorMsg !== undefined ? errorMsg : ''}
      Error Instance: ${JSON.stringify(errorInstance, null, 2)}
      Error Path: ${errorPath}
    `;
  }

  /**
   * Validates a manifest object against the manifest schema, returning the full validation 
   *   output from the hyperjump json-schema library, as well as the id of the schema used to 
   *   validate.
   * NOTE: The URL in the hyperjump validate function only needs to match the $id property of the 
   *   schema. It is not actually used to load the schema, so it doesn't matter that the schema file 
   *   is not actually at that URL.
   * @param manifest - The manifest object to validate.
   * @param type - The type of the manifest, either 'root' or 'enveloped'. If 'type' is not 
   *   specified, then it is determined from the format of the manifest.
   * @returns An object which describes the validity of the JSON object, as well as the id of the 
   *   schema used to validate.
   */
  public async validateManifestFullOutput(
    manifest: Json, type?: 'root' | 'enveloped'
  ): Promise<{ schemaId: string, output: OutputUnit}> {
    if (type === undefined) {
      if (typeof manifest === 'object' && manifest && 'jim' in manifest) {
        type = 'enveloped';
      } else {
        type = 'root';
      }
    }
    const schemaId = type === 'root' ? JIM_MANIFEST_SCHEMA_ID : MANIFEST_SCHEMA_ID;
    const output = await validate(schemaId, manifest, BASIC);
    return { schemaId, output };
  }

  /**
   * Validates a manifest object against the manifest schema, returning whether the object is valid
   *   and a string describing the errors if the object is invalid.
   * NOTE: The URL in the hyperjump validate function only needs to match the $id property of the 
   *   schema. It is not actually used to load the schema, so it doesn't matter that the schema file 
   *   is not actually at that URL.
   * @param manifest - The manifest object to validate.
   * @param type - The type of the manifest, either 'root' or 'enveloped'. If 'type' is not 
   *   specified, then it is determined from the format of the manifest.
   * @returns An object which notes whether the object is valid and a string describing the 
   *   errors if the object is invalid.
   */
  public async validateManifest(
    manifest: Json, type?: 'root' | 'enveloped'
  ): Promise<ValidateOutput> {
    const { schemaId, output } = await this.validateManifestFullOutput(manifest, type);
    if (output.valid) {
      return { valid: true };
    }
    const errors = this._prettyPrintValidationError(manifest, output, schemaId);
    return { valid: false, errors };
  }
}
