import { html, TemplateResult } from 'lit';

import '../components/obj-text-field';

// ---------------------
// CONFIGURE STORY BLOCK
// ---------------------

// Setup the story block.
export default {
	title: 'inputs/text-field',
	component: 'obj-text-field'
};

// ---------------------
// CREATE STORY TEMPLATE
// ---------------------

interface Story<T> {
	(args: T): TemplateResult;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
	storyName?: string;
	parameters?: Record<string, unknown>;
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

// Label

export const Label = Template.bind({});
Label.storyName = 'Label';
Label.args = {
	label: 'Username',
};

// Value

export const Value = Template.bind({});
Value.storyName = 'Value';
Value.args = {
	label: 'Username',
	value: 'Hello World'
};

// Placeholder

export const Placeholder = Template.bind({});
Placeholder.storyName = 'Placeholder';
Placeholder.args = {
	label: 'Username',
	placeholder: 'e.g. user@site.com'
};

// Message

export const Message = Template.bind({});
Message.storyName = 'Message';
Message.args = {
	label: 'Username',
	message: 'Must be at least 8 characters long'
};

// Error

export const Error = Template.bind({});
Error.storyName = 'Error';
Error.args = {
	label: 'Username',
	error: true,
	message: 'Field is required'
};

// Type - Stack

export const TypeStack = Template.bind({});
TypeStack.storyName = 'Type - Stack';
TypeStack.args = {
	label: 'Username',
	type: 'stack'
};

export const TypeStackDisabled = Template.bind({});
TypeStackDisabled.storyName = '🔸Disabled';
TypeStackDisabled.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'stack',
	disabled: true
};

export const TypeStackInvert = Template.bind({});
TypeStackInvert.storyName = '🔸Invert';
TypeStackInvert.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'stack',
	invert: true
};
TypeStackInvert.parameters = {
	backgrounds: { default: 'dark' }
};

export const TypeStackInvertDisabled = Template.bind({});
TypeStackInvertDisabled.storyName = '🔸Invert, Disabled';
TypeStackInvertDisabled.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'stack',
	invert: true,
	disabled: true
};
TypeStackInvertDisabled.parameters = {
	backgrounds: { default: 'dark' }
};

// Type - Outline

export const TypeOutline = Template.bind({});
TypeOutline.storyName = 'Type - Outline';
TypeOutline.args = {
	label: 'Username',
	type: 'outline'
};

export const TypeOutlineDisabled = Template.bind({});
TypeOutlineDisabled.storyName = '🔸Disabled';
TypeOutlineDisabled.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'outline',
	disabled: true
};

export const TypeOutlineInvert = Template.bind({});
TypeOutlineInvert.storyName = '🔸Invert';
TypeOutlineInvert.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'outline',
	invert: true
};
TypeOutlineInvert.parameters = {
	backgrounds: { default: 'dark' }
};

export const TypeOutlineInvertDisabled = Template.bind({});
TypeOutlineInvertDisabled.storyName = '🔸Invert, Disabled';
TypeOutlineInvertDisabled.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'outline',
	invert: true,
	disabled: true
};
TypeOutlineInvertDisabled.parameters = {
	backgrounds: { default: 'dark' }
};

// Type - Inline

export const TypeInline = Template.bind({});
TypeInline.storyName = 'Type - Inline';
TypeInline.args = {
	label: 'Username',
	type: 'inline'
};

export const TypeInlineDisabled = Template.bind({});
TypeInlineDisabled.storyName = '🔸Disabled';
TypeInlineDisabled.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'inline',
	disabled: true
};

export const TypeInlineInvert = Template.bind({});
TypeInlineInvert.storyName = '🔸Invert';
TypeInlineInvert.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'inline',
	invert: true
};
TypeInlineInvert.parameters = {
	backgrounds: { default: 'dark' }
};

export const TypeInlineInvertDisabled = Template.bind({});
TypeInlineInvertDisabled.storyName = '🔸Invert, Disabled';
TypeInlineInvertDisabled.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'inline',
	invert: true,
	disabled: true
};
TypeInlineInvertDisabled.parameters = {
	backgrounds: { default: 'dark' }
};

// Type - Filled

export const TypeFilled = Template.bind({});
TypeFilled.storyName = 'Type - Filled';
TypeFilled.args = {
	label: 'Username',
	type: 'filled'
};

export const TypeFilledDisabled = Template.bind({});
TypeFilledDisabled.storyName = '🔸Disabled';
TypeFilledDisabled.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'filled',
	disabled: true
};

export const TypeFilledInvert = Template.bind({});
TypeFilledInvert.storyName = '🔸Invert';
TypeFilledInvert.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'filled',
	invert: true
};
TypeFilledInvert.parameters = {
	backgrounds: { default: 'dark' }
};

export const TypeFilledInvertDisabled = Template.bind({});
TypeFilledInvertDisabled.storyName = '🔸Invert, Disabled';
TypeFilledInvertDisabled.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'filled',
	invert: true,
	disabled: true
};
TypeFilledInvertDisabled.parameters = {
	backgrounds: { default: 'dark' }
};

// Type - Clear

export const TypeClear = Template.bind({});
TypeClear.storyName = 'Type - Clear';
TypeClear.args = {
	label: 'Username',
	type: 'clear'
};

export const TypeClearDisabled = Template.bind({});
TypeClearDisabled.storyName = '🔸Disabled';
TypeClearDisabled.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'clear',
	disabled: true
};

export const TypeClearInvert = Template.bind({});
TypeClearInvert.storyName = '🔸Invert';
TypeClearInvert.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'clear',
	invert: true
};
TypeClearInvert.parameters = {
	backgrounds: { default: 'dark' }
};

export const TypeClearInvertDisabled = Template.bind({});
TypeClearInvertDisabled.storyName = '🔸Invert, Disabled';
TypeClearInvertDisabled.args = {
	label: 'Username',
	value: 'Hello World',
	type: 'clear',
	invert: true,
	disabled: true
};
TypeClearInvertDisabled.parameters = {
	backgrounds: { default: 'dark' }
};