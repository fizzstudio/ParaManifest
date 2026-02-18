// * Bundle Schemas and Build TS Types *

// Imports

import { writeFileSync } from 'fs';
import { compileFromFile } from 'json-schema-to-typescript';

import { bundle } from './bundler.ts';

// Bundle Schemas

const bundledSchema = bundle('./schema/manifest.schema.json');
writeFileSync('./schema/manifest_bundle.schema.json', JSON.stringify(bundledSchema, null, 2));

console.log('Finished bundling schema')

// Write TS types to file

await compileFromFile(
  './schema/manifest_bundle.schema.json', { 
    ignoreMinAndMaxItems: true,
    inferStringEnumKeysFromValues: true
  }
).then(
  ts => writeFileSync(`./lib/manifest.ts`, ts)
);

console.log('Finished building types')