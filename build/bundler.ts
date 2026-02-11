import { readFileSync } from 'fs';
import type { JsonObject, Json } from "@hyperjump/json-pointer";

// ASSUMPTIONS:
//   - Only the parent schema has external references
//   - $defs in the parent schema have no external references
//   - parent and children are (JSON) objects
//   - if an object has an external $ref key, then it has no other keys
//   - parent and children are all valid JSON schema docs
//   - all paths are valid

function isObject(val: any): val is object {
  return typeof val === 'object' && val !== null;
}

type JsonObjectWithDefs = JsonObject & { $defs: JsonObject };

function hasDefs(schema: JsonObject): schema is JsonObjectWithDefs {
  // `isObject(parent.$defs)` and `!Array.isArray(parent.$defs)` are mandatory in valid JSON schema docs. They are here for TypeScript purposes.
  return '$defs' in schema && isObject(schema.$defs) && !Array.isArray(schema.$defs);
}

function readJsonObject(path: string): JsonObject {
  const parentRaw = readFileSync(path, 'utf-8');
  return JSON.parse(parentRaw);
}

function bundleInExternal(path: string, defs: JsonObject): JsonObject {
  const child = readJsonObject(path);
  if (hasDefs(child)) {
    for (const [key, val] of Object.entries(child.$defs)) {
      defs[key] = val;
    }
    delete (child as JsonObject).$defs;
  }
  if ('$id' in child) {
    delete child.$id;
  }
  if ('$schema' in child) {
    delete child.$schema;
  }
  return child;
}

function bundleWalk(src: Json, defs: JsonObject): Json {
  if (!(isObject(src))) {
    return src;
  }
  if (Array.isArray(src)) {
    return src.map((element) => bundleWalk(element, defs));
  }
  // `typeof src.$ref === 'string'` is mandatory in valid JSON schema docs. It is here for TypeScript purposes.
  if ('$ref' in src && typeof src.$ref === 'string' && src.$ref.startsWith('.')) {
    return bundleInExternal(src.$ref, defs);
  }
  const target: Json = {};
  for (const key of Object.keys(src)) {
    target[key] = bundleWalk(src[key], defs);
  }
  return target;
}

export function bundle(path: string): Json {
  let parent = readJsonObject(path);
  if (!hasDefs(parent)) {
    parent.$defs = {};
  }
  return bundleWalk(parent, (parent as JsonObjectWithDefs).$defs);
}
