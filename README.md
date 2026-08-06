# @fizz/ParaManifest

Manifest file format for ParaCharts

A packaged module with npm dependencies on Fizz Studio's private registry.

## NOTE: `allOf` in schemas and TypeScript type inference errors

Consider a JSON schema such as the following:
```
"oneOf": [
  {
    "$ref": "#/$defs/name"
  },
  {
    "type": "array",
    "items": {
      "$ref": "#/$defs/name"
    }
  }
]
```

TypeScript then gives this *schema* the type:
```
({ $ref: string; type?: undefined; items?: undefined; minItems?: undefined; } | { type: string; items: { $ref: string; }; $ref?: undefined; })[]
```
Essentially, in an array of objects `A, B, ...`, TypeScript will infer `[property-key]?: undefined` in `A` for every property in `B` etc. which isn't in `A`. 

*Note*: Confusingly, this has nothing to do with the `json-schema-to-typescript` library, which creates TypeScript types for manifest objects. This is about the TypeScript type of the schema itself.

Why does this matter? The `hyperjump` library for validation expects schemas to have the `SchemaObject` type, which means that `type` has to have the type `SchemaFragment = string | number | boolean | null | SchemaObject | SchemaFragment[]` which doesn't include `undefined`. 

What's the upshot of this? In arrays of objects in schemas, each object must have all the same properties, so if we need different properties those should be pulled into a new `$def`. For example, in the current (7/31/26) manifest schema, the above schema becomes (roughly):
```
"nameOrNames": {
  "oneOf": [
    { 
      "$ref": "#/$defs/name"
    },
    {
      "$ref": "#/$defs/multipleNames"
    }
  ],
},
"multipleNames": {
  "type": "array",
  "items": {
    "$ref": "#/$defs/name"
  }
}
```
