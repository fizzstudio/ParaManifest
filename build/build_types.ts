import { writeFileSync } from 'fs';
import { compileFromFile } from 'json-schema-to-typescript';

compileFromFile(
  `./schema/jim_manifest.schema.json`, { 
    ignoreMinAndMaxItems: true,
    inferStringEnumKeysFromValues: true
  }
).then(
  ts => writeFileSync(`./lib/manifest.ts`, ts)
);