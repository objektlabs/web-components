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
	storyName?: string;
}

interface ArgTypes {
	label?: string;
	value?: string;
	placeholder?: string;
	type?: string;
	labelPosition?: string;
	invert?: boolean;
	disabled?: boolean;
	slot?: TemplateResult;
}

const Template: Story<ArgTypes> = (args: ArgTypes) => html`
	<obj-text-field
		.label="${args.label}"
		.value="${args.value}"
		.placeholder="${args.placeholder}"
		.type="${args.type}"
		.labelPosition="${args.labelPosition}"
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

// Type - Primary
export const TypePrimary = Template.bind({});
TypePrimary.storyName = 'Type - Primary';
TypePrimary.args = {
	label: 'Username',
	type: 'primary'
};

// Type - Secondary
export const TypeSecondary = Template.bind({});
TypeSecondary.storyName = 'Type - Secondary';
TypeSecondary.args = {
	label: 'Username',
	type: 'secondary'
};

// Label Position - Above
export const LabelPositionAbove = Template.bind({});
LabelPositionAbove.storyName = 'Label Position - Above';
LabelPositionAbove.args = {
	label: 'Username',
	labelPosition: 'above'
};

// Label Position - Inline
export const LabelPositionInline = Template.bind({});
LabelPositionInline.storyName = 'Label Position - Inline';
LabelPositionInline.args = {
	label: 'Username',
	labelPosition: 'inline'
};

// Label Position - Inside
export const LabelPositionInside = Template.bind({});
LabelPositionInside.storyName = 'Label Position - Inside';
LabelPositionInside.args = {
	label: 'Username',
	labelPosition: 'inside'
};