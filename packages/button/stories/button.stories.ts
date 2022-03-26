import { html, TemplateResult } from 'lit';
import '../src/obj-button';

export default {
  title: 'Button',
  component: 'obj-button',
  argTypes: {
    type: { 
      control: 'radio',
      options: ['primary', 'secondary']
    },
    label: { control: 'text' },
    invert: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  type?: string;
  label?: string;
  invert?: boolean;
  disabled?: boolean;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  type = 'secondary',
  label = 'Hello World',
  invert,
  disabled,
  slot,
}: ArgTypes) => html`
  <obj-button
    .type=${type}
    .label=${label}
    ?invert=${invert}
    ?disabled=${disabled}
  >
    ${slot}
  </obj-button>
`;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Hello World',
};

export const PrimaryInvert = Template.bind({});
PrimaryInvert.args = {
  type: 'primary',
  label: 'Hello World',
  invert: true
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  type: 'primary',
  label: 'Hello World',
  disabled: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Hello World',
};

export const SecondaryInvert = Template.bind({});
SecondaryInvert.args = {
  type: 'secondary',
  label: 'Hello World',
  invert: true
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  type: 'secondary',
  label: 'Hello World',
  disabled: true
};