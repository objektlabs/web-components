# obj-text-field

A simple text input component.

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

| Property      | Attribute     | Modifiers | Type             | Default | Description                                      |
|---------------|---------------|-----------|------------------|---------|--------------------------------------------------|
| `disabled`    | `disabled`    |           | `boolean`        | false   |                                                  |
| `invert`      | `invert`      |           | `boolean`        | false   | Set to invert the component colors for rendering on dark backgrounds. |
| `label`       | `label`       |           | `string`         | null    | The text field display label.                    |
| `override`    |               |           | `CSSResultGroup` |         | The element style template.                      |
| `placeholder` | `placeholder` |           | `string`         | null    | The default text to display in the text field when the value is not set. |
| `styles`      |               | readonly  | `CSSResult[]`    |         |                                                  |
| `value`       | `value`       |           | `string`         | null    | The value entered into the text field.           |

## Events

| Event   | Description                                      |
|---------|--------------------------------------------------|
| `input` | Dispatched when the text in entered into the field. |

## CSS Shadow Parts

| Part          | Description                |
|---------------|----------------------------|
| `input-field` | The input field container. |

## CSS Custom Properties

| Property                                         |
|--------------------------------------------------|
| `--obj-text-field-border-radius`                 |
| `--obj-text-field-padding`                       |
| `--obj-text-field-primary-background`            |
| `--obj-text-field-primary-border`                |
| `--obj-text-field-primary-disabled-background`   |
| `--obj-text-field-primary-disabled-border`       |
| `--obj-text-field-primary-disabled-font-color`   |
| `--obj-text-field-primary-font-color`            |
| `--obj-text-field-primary-font-family`           |
| `--obj-text-field-primary-font-size`             |
| `--obj-text-field-primary-font-weight`           |
| `--obj-text-field-primary-invert-background`     |
| `--obj-text-field-primary-invert-border`         |
| `--obj-text-field-primary-invert-font-color`     |
| `--obj-text-field-secondary-background`          |
| `--obj-text-field-secondary-border`              |
| `--obj-text-field-secondary-disabled-background` |
| `--obj-text-field-secondary-disabled-border`     |
| `--obj-text-field-secondary-disabled-font-color` |
| `--obj-text-field-secondary-font-color`          |
| `--obj-text-field-secondary-font-family`         |
| `--obj-text-field-secondary-font-size`           |
| `--obj-text-field-secondary-font-weight`         |
| `--obj-text-field-secondary-invert-background`   |
| `--obj-text-field-secondary-invert-border`       |
| `--obj-text-field-secondary-invert-font-color`   |
| `--obj-text-field-text-align`                    |
