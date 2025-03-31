import { writeFileSync } from 'fs';
import { compileFromFile } from 'json-schema-to-typescript';

compileFromFile(
  `./schema/manifest.schema.json`, 
  { ignoreMinAndMaxItems: true }
).then(
  ts => writeFileSync(`./types/manifest.d.ts`, ts)
);