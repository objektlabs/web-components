import { html, TemplateResult } from 'lit';

import '../components/obj-text-field';

// Setup the story block.
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

// Create a rendering template for the component.

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

const Template: Story<ArgTypes> = (args: ArgTypes) => html`
	<obj-text-field
		.label="${args.label}"
		.value="${args.value}"
		.placeholder="${args.placeholder}"
		?invert="${args.invert}"
		?disabled="${args.disabled}">
		${args.slot}
	</obj-text-field>
`;

// Define Story - Default
export const Default = Template.bind({});

// Define Story - Label
export const Label = Template.bind({});
Label.args = {
	label: 'Username',
};

// Define Story - Value
export const Value = Template.bind({});
Value.args = {
	label: 'Username',
	value: 'Hello World',
};

// Define Story - Placeholder
export const Placeholder = Template.bind({});
Placeholder.args = {
	label: 'Username',
	placeholder: 'e.g. user@site.com',
};