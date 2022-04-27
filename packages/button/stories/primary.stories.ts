import { html, TemplateResult } from 'lit';
import { Story, Meta } from '@storybook/web-components';

import '../components/obj-button';

// ---------------------
// CONFIGURE STORY BLOCK
// ---------------------

export default {
	title: 'Components/Button/Type/Primary',
	component: 'obj-button',
	argTypes: {
		type: {
			control: { type: 'radio' },
			options: ['primary', 'secondary', 'clear']
		}
	},
	parameters: {
		actions: {
			handles: ['click']
		},
	}
} as Meta;

// ---------------------
// CREATE STORY TEMPLATE
// ---------------------

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

const createStory = (name: string, background: string, args: Partial<ArgTypes>) => {

	const storyConfig: Story<ArgTypes> = Template.bind({});
	storyConfig.storyName = name;
	storyConfig.parameters = {
		backgrounds: { default: background },
	};
	storyConfig.args = args;

	return storyConfig;
};

// -------------
// SETUP STORIES
// -------------

export const Default = createStory('Default', 'light', {
	type: 'primary',
	label: 'Hello World'
});

export const Disabled = createStory('Disabled', 'light', {
	type: 'primary',
	label: 'Hello World',
	disabled: true
});

export const Invert = createStory('Invert', 'dark', {
	type: 'primary',
	label: 'Hello World',
	invert: true
});

export const InvertDisabled = createStory('Invert, Disabled', 'dark', {
	type: 'primary',
	label: 'Hello World',
	disabled: true,
	invert: true
});