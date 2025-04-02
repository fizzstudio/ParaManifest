import { appendFileSync } from 'fs';
import { compileFromFile } from 'json-schema-to-typescript';

compileFromFile(
  `./schema/manifest.schema.json`, 
  { ignoreMinAndMaxItems: true }
).then(
  ts => appendFileSync(`./dist/paramanifest.d.ts`, ts)
);