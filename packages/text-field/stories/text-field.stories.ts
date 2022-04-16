import { html, TemplateResult } from 'lit';

import '../components/obj-text-field';

// Setup the story block.
export default {
	title: 'inputs/text-field',
	component: 'obj-text-field'
};

// Create a rendering template for the component.
interface Story<T> {
	(args: T): TemplateResult;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
	storyName?: string;
}

interface ArgTypes {
	type: string;
	label: string;
	value: string;
	placeholder: string;
	message: string;
	error: boolean;
	invert: boolean;
	disabled: boolean;
	slot: TemplateResult;
}

const Template: Story<ArgTypes> = (args: ArgTypes) => html`
	<obj-text-field
		.type="${args.type}"
		.label="${args.label}"
		.value="${args.value}"
		.placeholder="${args.placeholder}"
		.message="${args.message}"
		.error="${args.error}"
		?invert="${args.invert}"
		?disabled="${args.disabled}">
		${args.slot}
	</obj-text-field>
`;

// -------------
// SETUP STORIES
// -------------

// Default
export const Default = Template.bind({});

// Label
export const Label = Template.bind({});
Label.args = {
	label: 'Username',
};

// Value
export const Value = Template.bind({});
Value.args = {
	label: 'Username',
	value: 'Hello World',
};

// Placeholder
export const Placeholder = Template.bind({});
Placeholder.args = {
	label: 'Username',
	placeholder: 'e.g. user@site.com',
};

// Message
export const Message = Template.bind({});
Message.args = {
	label: 'Username',
	message: 'Must be at least 8 characters long'
};

// Error
export const Error = Template.bind({});
Error.args = {
	label: 'Username',
	error: true,
	message: 'Field is required'
};

// Type - Above
export const TypeAbove = Template.bind({});
TypeAbove.storyName = 'Type - Stack';
TypeAbove.args = {
	label: 'Username',
	type: 'stack'
};

// Type - Outline
export const TypeOutline = Template.bind({});
TypeOutline.storyName = 'Type - Outline';
TypeOutline.args = {
	label: 'Username',
	type: 'outline'
};

// Type - Inside
export const TypeInline = Template.bind({});
TypeInline.storyName = 'Type - Inline';
TypeInline.args = {
	label: 'Username',
	type: 'inline'
};

// Type - Filled
export const TypeFilled = Template.bind({});
TypeFilled.storyName = 'Type - Filled';
TypeFilled.args = {
	label: 'Username',
	type: 'filled'
};

// Type - Clear
export const TypeClear = Template.bind({});
TypeClear.storyName = 'Type - Clear';
TypeClear.args = {
	label: 'Username',
	type: 'clear'
};