# obj-text-field

A simple text input component.

&#128161; [Live demo](https://objektlabs.github.io/web-components/?path=/story/inputs-text-field)

## Installation
```sh
npm install @objekt/obj-text-field
```

## Example

```html
Primary:

<obj-text-field label="Username"></obj-text-field>
```

## Properties

| Property      | Attribute     | Modifiers | Type             | Description                                      |
|---------------|---------------|-----------|------------------|--------------------------------------------------|
| `disabled`    | `disabled`    |           | `boolean`        | Sets to place the component in an disabled state. |
| `error`       | `error`       |           | `boolean`        | Set to place the component in an error state.    |
| `invert`      | `invert`      |           | `boolean`        | Set to invert the component colors for rendering on dark backgrounds. |
| `label`       | `label`       |           | `string`         | The text field display label.                    |
| `message`     | `message`     |           | `string`         | A guide message to show under the text field.    |
| `override`    |               |           | `CSSResultGroup` | The element style template.                      |
| `placeholder` | `placeholder` |           | `string`         | The default text to display in the text field when the value is not set. |
| `styles`      |               | readonly  | `CSSResult[]`    |                                                  |
| `type`        | `type`        |           | `string`         | The text field variant type, e.g. stack, outline, inline, filled, or clear. |
| `value`       | `value`       |           | `string`         | The value entered into the text field.           |

## Events

| Event           | Type                  | Description                                      |
|-----------------|-----------------------|--------------------------------------------------|
| `value-changed` | `CustomEvent<string>` | Dispatched when the text in entered into the field. |

## CSS Custom Properties

| Property |
|----------|
| `TODO`   |
