# `<obj-button>` [![Published on npm](https://img.shields.io/npm/v/@objekt/button.svg)](https://www.npmjs.com/package/@objekt/button)

Simple component to capture user click and tap actions.

[Live Demo](https://objektlabs.github.io/web-components/demos/button/)


## Installation
```sh
npm install @objekt/button
```

## Example Usage

### Primary

```html
  <obj-button label="Primary" type="primary"></obj-button>
  <obj-button label="Disabled" type="primary" disabled></obj-button>
  <obj-button label="Invert" type="primary" invert></obj-button>
```

### Secondary

```html
  <obj-button label="Secondary" type="secondary"></obj-button>
  <obj-button label="Disabled" type="secondary" disabled></obj-button>
  <obj-button label="Invert" type="secondary" invert></obj-button>
```

## API

### Slots
*None*

### Properties/Attributes
| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `label` | `string` | `''` | Label to display in the button.
| `icon` | `string` | `null` | Icon to display in the button.
| `disabled` | `boolean` | `false` | When set, makes the button inactive.
| `invert` | `boolean` | `false` | When set, inverts the color pallete of the button for use on dark backgrounds.

### Methods
*None*

### Events
| Name | Description
| ---- | -----------
| `click` | When the button is clicked.

### CSS Custom Properties

| Name | Default | Description
| ------------------------------------- | -------------------------------------------------- | ---
| `--obj-button-border-radius` | | 
| `--obj-button-padding` | | 
| `--obj-button-text-align` | | 
| `--obj-button-primary-background` | | 
| `--obj-button-primary-border` | | 
| `--obj-button-primary-font-color` | | 
| `--obj-button-primary-font-family` | | 
| `--obj-button-primary-font-size` | | 
| `--obj-button-primary-font-weight` | | 
| `--obj-button-primary-disabled-background` | | 
| `--obj-button-primary-disabled-border` | | 
| `--obj-button-primary-disabled-font-color` | | 
| `--obj-button-primary-invert-background` | | 
| `--obj-button-primary-invert-border` | | 
| `--obj-button-primary-invert-font-color` | | 
| `--obj-button-secondary-background` | | 
| `--obj-button-secondary-border` | | 
| `--obj-button-secondary-font-color` | | 
| `--obj-button-secondary-font-family` | | 
| `--obj-button-secondary-font-size` | | 
| `--obj-button-secondary-font-weight` | | 
| `--obj-button-secondary-disabled-background` | | 
| `--obj-button-secondary-disabled-border` | | 
| `--obj-button-secondary-disabled-font-color` | | 
| `--obj-button-secondary-invert-background` | | 
| `--obj-button-secondary-invert-border` | | 
| `--obj-button-secondary-invert-font-color` | | 

#### Global Custom Properties

This component exposes the following global [theming](https://github.com/material-components/material-components-web-components/blob/master/docs/theming.md)
custom properties.

| Name                                 | Description
| ------------------------------------ | -----------
| `--obj-theme-primary`                | 
| `--obj-theme-secondary`             | 