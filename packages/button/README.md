# obj-button

A clickable button component.

## Installation
```sh
npm install @objekt/web-components/button
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
```

## Properties

| Property   | Attribute  | Modifiers | Type          | Default     | Description                                      |
|------------|------------|-----------|---------------|-------------|--------------------------------------------------|
| `disabled` | `disabled` |           | `boolean`     | false       |                                                  |
| `invert`   | `invert`   |           | `boolean`     | false       | Set to invert the component colors for rendering on dark backgrounds. |
| `label`    | `label`    |           | `string`      | ""          | The button display label.                        |
| `override` |            |           |               |             | The element style template.                      |
| `styles`   |            | readonly  | `CSSResult[]` |             |                                                  |
| `type`     | `type`     |           | `string`      | "secondary" | The button display type. e.g. primary, secondary. |

## Methods

| Method         | Type                    |
|----------------|-------------------------|
| `#handleClick` | `(e: MouseEvent): void` |

## Events

| Event   | Description                            |
|---------|----------------------------------------|
| `click` | Dispatched when the button is clicked. |

## CSS Shadow Parts

| Part     | Description           |
|----------|-----------------------|
| `button` | The button container. |

## CSS Custom Properties

| Property                                     | Description |
|----------------------------------------------|-------------|
| `--obj-button-border-radius`                 | Hello World |
| `--obj-button-padding`                       |             |
| `--obj-button-primary-background`            |             |
| `--obj-button-primary-border`                |             |
| `--obj-button-primary-disabled-background`   |             |
| `--obj-button-primary-disabled-border`       |             |
| `--obj-button-primary-disabled-font-color`   |             |
| `--obj-button-primary-font-color`            |             |
| `--obj-button-primary-font-family`           |             |
| `--obj-button-primary-font-size`             |             |
| `--obj-button-primary-font-weight`           |             |
| `--obj-button-primary-invert-background`     |             |
| `--obj-button-primary-invert-border`         |             |
| `--obj-button-primary-invert-font-color`     |             |
| `--obj-button-secondary-background`          |             |
| `--obj-button-secondary-border`              |             |
| `--obj-button-secondary-disabled-background` |             |
| `--obj-button-secondary-disabled-border`     |             |
| `--obj-button-secondary-disabled-font-color` |             |
| `--obj-button-secondary-font-color`          |             |
| `--obj-button-secondary-font-family`         |             |
| `--obj-button-secondary-font-size`           |             |
| `--obj-button-secondary-font-weight`         |             |
| `--obj-button-secondary-invert-background`   |             |
| `--obj-button-secondary-invert-border`       |             |
| `--obj-button-secondary-invert-font-color`   |             |
| `--obj-button-text-align`                    |             |
