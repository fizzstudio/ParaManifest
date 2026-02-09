// * Bundle Schemas and Build TS Types *

// Imports

import { writeFileSync } from 'fs';
import { compileFromFile } from 'json-schema-to-typescript';
import { registerSchema, getAllRegisteredSchemaUris } from '@hyperjump/json-schema/draft-2020-12';
import { bundle } from '@hyperjump/json-schema/bundle';

import jimManifestSchema from '../schema/jim_manifest.schema.json' with { type: 'json' };;
import extensionsManifestSchema from '../schema/extensions_manifest.schema.json' with { type: 'json' };;
import manifestSchema from '../schema/manifest.schema.json' with { type: 'json' };;

// Bundle Schemas

registerSchema(jimManifestSchema);
registerSchema(extensionsManifestSchema);
registerSchema(manifestSchema);

const bundledSchema = await bundle('https://fizz.studio/schema/manifest.schema.json');
writeFileSync(`./schema/manifest_bundle.schema.json`, JSON.stringify(bundledSchema, null, 2));

// Write TS types to file

compileFromFile(
  `./schema/jim_manifest.schema.json`, { 
    ignoreMinAndMaxItems: true,
    inferStringEnumKeysFromValues: true
  }
).then(
  ts => writeFileSync(`./lib/manifest.ts`, ts)
);

console.log('Finished building types')