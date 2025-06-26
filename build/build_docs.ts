import JsonSchemaStaticDocs from 'json-schema-static-docs';

(async () => {
  const jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
    inputPath: '../schema',
    outputPath: 'docs',
    jsonSchemaVersion: 'https://json-schema.org/draft/2020-12/schema',
    ajvOptions: {
      allowUnionTypes: true,
    },
  });
  await jsonSchemaStaticDocs.generate();
  console.log('Documentation generated.');
})();
