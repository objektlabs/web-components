import { html, TemplateResult } from 'lit';
import '../components/obj-text-field';

export default {
  title: 'Inputs/Text-Field',
  component: 'obj-text-field',
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
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
  label?: string;
  value?: string;
  placeholder?: string;
  invert?: boolean;
  disabled?: boolean;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  label = '',
  value = '',
  placeholder = '',
  invert,
  disabled,
  slot,
}: ArgTypes) => html`
  <obj-text-field
    .label=${label}
    .value=${value}
    .placeholder=${placeholder}
    ?invert=${invert}
    ?disabled=${disabled}
  >
    ${slot}
  </obj-text-field>
`;

export const Default = Template.bind({});

export const Label = Template.bind({});
Label.args = {
  label: 'Username',
};

export const Value = Template.bind({});
Value.args = {
  label: 'Username',
  value: 'Hello World',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: 'Username',
  placeholder: 'e.g. user@site.com',
};