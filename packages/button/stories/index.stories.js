// Import dependencies
import { html } from 'lit-html';

// Import component
import "../src/index.ts";

// Set story configuration
export default {
  title: 'Button',
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' }
      ],
    },
  },
};

// Create story template
const Template = ({ label, disabled, invert }) => html`
  <obj-button
    .label="${label}"
    ?disabled="${disabled}"
    ?invert="${invert}">
  </obj-button>
`;

// Export stories
export const primary = Template.bind({});
primary.args = {
  label: 'Primary'
};

export const secondary = Template.bind({});
secondary.args = {
  label: 'Secondary'
};