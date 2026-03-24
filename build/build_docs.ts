import JsonSchemaStaticDocs from 'json-schema-static-docs';

(async () => {
  const jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
    inputPath: 'schema',
    inputFileGlob: 'manifest_bundle.schema.json',
    outputPath: 'docs/manifest',
    jsonSchemaVersion: 'https://json-schema.org/draft/2020-12/schema',
    ajvOptions: {
      allowUnionTypes: true,
      strictSchema: 'log'
    },
  });
  await jsonSchemaStaticDocs.generate();
  console.log('Documentation generated.');
})();
