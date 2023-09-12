# obj-button

A clickable button component.

&#128161; [Live demo](https://objektlabs.github.io/web-components/?path=/story/buttons-button)

## Installation
```sh
npm install @objekt/obj-button
```

## Example

```html
Primary:

<obj-button label="Primary" type="primary"></obj-button>
<obj-button label="Disabled" type="primary" disabled></obj-button>
<obj-button label="Invert" type="primary" invert></obj-button>

Secondary:

<obj-button label="Secondary" type="secondary"></obj-button>
<obj-button label="Disabled" type="secondary" disabled></obj-button>
<obj-button label="Invert" type="secondary" invert></obj-button>

Clear:

<obj-button label="Clear" type="clear"></obj-button>
<obj-button label="Disabled" type="clear" disabled></obj-button>
<obj-button label="Invert" type="clear" invert></obj-button>
```

## Properties

| Property   | Attribute  | Modifiers | Type          | Default     | Description                                      |
|------------|------------|-----------|---------------|-------------|--------------------------------------------------|
| `disabled` | `disabled` |           | `boolean`     |             | Sets to place the component in an disabled state. |
| `invert`   | `invert`   |           | `boolean`     |             | Set to invert the component colors for rendering on dark backgrounds. |
| `label`    | `label`    |           | `string`      | ""          | The button display label.                        |
| `override` |            |           |               |             | The element style template.                      |
| `styles`   |            | readonly  | `CSSResult[]` |             |                                                  |
| `type`     | `type`     |           | `string`      | "secondary" | The button display type. e.g. primary, secondary. |

## Methods

| Method         | Type                    |
|----------------|-------------------------|
| `#handleClick` | `(e: MouseEvent): void` |

## Events

| Event   | Type          | Description                            |
|---------|---------------|----------------------------------------|
| `click` | `CustomEvent` | Dispatched when the button is clicked. |

## CSS Shadow Parts

| Part     | Description           |
|----------|-----------------------|
| `button` | The button container. |

## CSS Custom Properties

| Property                                     | Description                                 |
|----------------------------------------------|---------------------------------------------|
| `--obj-button-border-radius`                 | Button corner radius.                       |
| `--obj-button-clear-background`              | Clear button background color.              |
| `--obj-button-clear-border`                  | Clear button border.                        |
| `--obj-button-clear-disabled-background`     | Clear button disabled background color.     |
| `--obj-button-clear-disabled-border`         | Clear button disabled border.               |
| `--obj-button-clear-disabled-font-color`     | Clear button disabled font color.           |
| `--obj-button-clear-font-color`              | Clear button font color.                    |
| `--obj-button-clear-invert-background`       | Clear button invert background color.       |
| `--obj-button-clear-invert-border`           | Clear button invert border.                 |
| `--obj-button-clear-invert-font-color`       | Clear button invert font color.             |
| `--obj-button-font-family`                   | Button font family.                         |
| `--obj-button-font-size`                     | Button font size.                           |
| `--obj-button-font-weight`                   | Button font weight.                         |
| `--obj-button-padding`                       | Button internal padding.                    |
| `--obj-button-primary-background`            | Primary button background color.            |
| `--obj-button-primary-border`                | Primary button border.                      |
| `--obj-button-primary-disabled-background`   | Primary button disabled background color.   |
| `--obj-button-primary-disabled-border`       | Primary button disabled border.             |
| `--obj-button-primary-disabled-font-color`   | Primary button disabled font color.         |
| `--obj-button-primary-font-color`            | Primary button font color.                  |
| `--obj-button-primary-invert-background`     | Primary button invert background color.     |
| `--obj-button-primary-invert-border`         | Primary button invert border.               |
| `--obj-button-primary-invert-font-color`     | Primary button invert font color.           |
| `--obj-button-secondary-background`          | Secondary button background color.          |
| `--obj-button-secondary-border`              | Secondary button border.                    |
| `--obj-button-secondary-disabled-background` | Secondary button disabled background color. |
| `--obj-button-secondary-disabled-border`     | Secondary button disabled border.           |
| `--obj-button-secondary-disabled-font-color` | Secondary button disabled font color.       |
| `--obj-button-secondary-font-color`          | Secondary button font color.                |
| `--obj-button-secondary-invert-background`   | Secondary button invert background color.   |
| `--obj-button-secondary-invert-border`       | Secondary button invert border.             |
| `--obj-button-secondary-invert-font-color`   | Secondary button invert font color.         |
| `--obj-button-text-align`                    | Horizontal text alignment.                  |
