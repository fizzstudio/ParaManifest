import { appendFileSync } from 'fs';
import { compileFromFile } from 'json-schema-to-typescript';

compileFromFile(
  `./schema/manifest.schema.json`, { 
    ignoreMinAndMaxItems: true,
    inferStringEnumKeysFromValues: true
  }
).then(
  ts => appendFileSync(`./dist/paramanifest.d.ts`, ts)
);