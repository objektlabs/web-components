import { html, TemplateResult } from 'lit';

import '../components/obj-button';

// ---------------------
// CONFIGURE STORY BLOCK
// ---------------------

export default {
	title: 'buttons/button',
	component: 'obj-button'
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
	invert: boolean;
	disabled: boolean;
	slot: TemplateResult;
}

const Template: Story<ArgTypes> = (args: ArgTypes) => html`
	<obj-button
		.type="${args.type}"
		.label="${args.label}"
		?invert="${args.invert}"
		?disabled="${args.disabled}">
		${args.slot}
	</obj-button>
`;

// -------------
// SETUP STORIES
// -------------

// Type - Primary

export const TypePrimary = Template.bind({});
TypePrimary.storyName = 'Type - Primary';
TypePrimary.args = {
	type: 'primary',
	label: 'Hello World'
};

export const TypePrimaryDisabled = Template.bind({});
TypePrimaryDisabled.storyName = '🔸Disabled';
TypePrimaryDisabled.args = {
	type: 'primary',
	label: 'Hello World',
	disabled: true
};

export const TypePrimaryInvert = Template.bind({});
TypePrimaryInvert.storyName = '🔸Invert';
TypePrimaryInvert.args = {
	type: 'primary',
	label: 'Hello World',
	invert: true
};
TypePrimaryInvert.parameters = {
	backgrounds: { default: 'dark' }
};

export const TypePrimaryInvertDisabled = Template.bind({});
TypePrimaryInvertDisabled.storyName = '🔸Invert, Disabled';
TypePrimaryInvertDisabled.args = {
	type: 'primary',
	label: 'Hello World',
	invert: true,
	disabled: true
};
TypePrimaryInvertDisabled.parameters = {
	backgrounds: { default: 'dark' }
};

// Type - Secondary

export const TypeSecondary = Template.bind({});
TypeSecondary.storyName = 'Type - Secondary';
TypeSecondary.args = {
	type: 'secondary',
	label: 'Hello World'
};

export const TypeSecondaryDisabled = Template.bind({});
TypeSecondaryDisabled.storyName = '🔸Disabled';
TypeSecondaryDisabled.args = {
	type: 'secondary',
	label: 'Hello World',
	disabled: true
};

export const TypeSecondaryInvert = Template.bind({});
TypeSecondaryInvert.storyName = '🔸Invert';
TypeSecondaryInvert.args = {
	type: 'secondary',
	label: 'Hello World',
	invert: true
};
TypeSecondaryInvert.parameters = {
	backgrounds: { default: 'dark' }
};

export const TypeSecondaryInvertDisabled = Template.bind({});
TypeSecondaryInvertDisabled.storyName = '🔸Invert, Disabled';
TypeSecondaryInvertDisabled.args = {
	type: 'secondary',
	label: 'Hello World',
	invert: true,
	disabled: true
};
TypeSecondaryInvertDisabled.parameters = {
	backgrounds: { default: 'dark' }
};

// Type - Clear

export const TypeClear = Template.bind({});
TypeClear.storyName = 'Type - Clear';
TypeClear.args = {
	type: 'clear',
	label: 'Hello World'
};

export const TypeClearDisabled = Template.bind({});
TypeClearDisabled.storyName = '🔸Disabled';
TypeClearDisabled.args = {
	type: 'clear',
	label: 'Hello World',
	disabled: true
};

export const TypeClearInvert = Template.bind({});
TypeClearInvert.storyName = '🔸Invert';
TypeClearInvert.args = {
	type: 'clear',
	label: 'Hello World',
	invert: true
};
TypeClearInvert.parameters = {
	backgrounds: { default: 'dark' }
};

export const TypeClearInvertDisabled = Template.bind({});
TypeClearInvertDisabled.storyName = '🔸Invert, Disabled';
TypeClearInvertDisabled.args = {
	type: 'clear',
	label: 'Hello World',
	invert: true,
	disabled: true
};
TypeClearInvertDisabled.parameters = {
	backgrounds: { default: 'dark' }
};