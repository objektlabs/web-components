import { html, TemplateResult } from 'lit';
import { Story, Meta } from '@storybook/web-components';

import '../components/obj-button';

// ---------------------
// CONFIGURE STORY BLOCK
// ---------------------

export default {
	title: 'Components/Button',
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

export const Default = createStory('Label', 'light', {
	label: 'Hello World'
});