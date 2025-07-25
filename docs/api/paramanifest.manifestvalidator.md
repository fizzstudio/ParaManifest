<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fizz/paramanifest](./paramanifest.md) &gt; [ManifestValidator](./paramanifest.manifestvalidator.md)

## ManifestValidator class

Validates JSON files against the Manifest schema

**Signature:**

```typescript
export declare class ManifestValidator 
```

## Constructors

<table><thead><tr><th>

Constructor


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[(constructor)()](./paramanifest.manifestvalidator._constructor_.md)


</td><td>


</td><td>

Construct an instance of ManifestValidator. 


</td></tr>
</tbody></table>

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[fullValidate(json)](./paramanifest.manifestvalidator.fullvalidate.md)


</td><td>


</td><td>

Validates a JSON object against the manifest schema, returning the full validation output from the hyperjump json-schema library. NOTE: The URL in the hyperjump validate function only needs to match the $id property of the schema. It is not actually used to load the schema, so it doesn't matter that the schema file is not actually at that URL.


</td></tr>
<tr><td>

[validate(json)](./paramanifest.manifestvalidator.validate.md)


</td><td>


</td><td>

Validates a JSON object against the validator's schema, returning whether the object is valid and a string displaying the errors if the object is invalid


</td></tr>
</tbody></table>
