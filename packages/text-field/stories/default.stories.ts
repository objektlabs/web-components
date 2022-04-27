import { html, TemplateResult } from 'lit';
import { Story, Meta } from '@storybook/web-components';

import '../components/obj-text-field';

// ---------------------
// CONFIGURE STORY BLOCK
// ---------------------

// Setup the story block.
export default {
	title: 'Components/Text-Field',
	component: 'obj-text-field',
	argTypes: {
		type: {
			control: { type: 'radio' },
			options: ['stack', 'inline', 'outline', 'filled', 'clear']
		}
	},
	parameters: {
		actions: {
			handles: ['value-changed']
		},
	}
} as Meta;

// ---------------------
// CREATE STORY TEMPLATE
// ---------------------

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

export const Label = createStory('Label', 'light', {
	label: 'Username',
});

export const Value = createStory('Value', 'light', {
	label: 'Username',
	value: 'Hello World'
});

export const Placeholder = createStory('Placeholder', 'light', {
	label: 'Username',
	placeholder: 'e.g. user@site.com'
});

export const Message = createStory('Message', 'light', {
	label: 'Username',
	message: 'Must be at least 8 characters long'
});

export const Error = createStory('Error', 'light', {
	label: 'Username',
	error: true,
	message: 'Field is required'
});