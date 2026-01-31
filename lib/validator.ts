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

import manifestSchema from '../schema/manifest.schema.json';

// * Helper Types and Objects *

export type ValidateOutput = {
  valid: boolean,
  errors?: string
}

// * Main Class *

/**
 * Validates JSON files against the Manifest schema
 */
export class ManifestValidator {
  private static schema: SchemaObject = manifestSchema;
  private static id: string = manifestSchema.$id;

  /**
   * Construct an instance of ManifestValidator.
   * @constructor
   */
  constructor() { 
    if (!hasSchema(ManifestValidator.id)) {
      registerSchema(ManifestValidator.schema);
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
  private _prettyPrintValidationError(instance: Json, validatorOutput: OutputUnit): string {
    const immediateError = validatorOutput.errors!.at(-1)!;
    const errorKeyword = immediateError.keyword.slice(24);
    const locationParts = immediateError.absoluteKeywordLocation.split('#');
    //const locationId = locationParts[0];
    //const schema = this.subschemaMap[locationId];
    const schemaPath = this._convertToJsonPath('$' + locationParts[1]);
    const immediateSchema = jp.query(ManifestValidator.schema, schemaPath);
    const errorPath = this._convertToJsonPath(immediateError.instanceLocation);
    const errorInstance = jp.query(instance, errorPath);
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
   * Validates a JSON object against the manifest schema, returning the full validation output from
   * the hyperjump json-schema library.
   * NOTE: The URL in the hyperjump validate function only needs to match the $id property of the schema.
   * It is not actually used to load the schema, so it doesn't matter that the schema file is not 
   * actually at that URL.
   * @param json - The JSON object to validate
   * @returns An object which describes the validity of the JSON object
   * @async @public
   */
  async fullValidate(json: Json): Promise<OutputUnit> {
    return await validate(ManifestValidator.id, json, BASIC);
  }

  /**
   * Validates a JSON object against the validator's schema, returning whether the object is valid and a
   * string displaying the errors if the object is invalid
   * @param json - The JSON object to validate 
   * @returns An object which notes whether the object is valid and a string displaying the errors if 
   * the object is invalid
   * @async @public
   */
    async validate(json: Json): Promise<ValidateOutput> {
      const output = await validate(ManifestValidator.id, json, BASIC);
      if (output.valid) {
        return { valid: true };
      }
      const errors = this._prettyPrintValidationError(json, output);
      return { valid: false, errors };
    }
}
