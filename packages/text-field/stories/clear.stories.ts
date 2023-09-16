import type { Meta } from '@storybook/web-components';

import { Controls, Params, Story } from './obj-text-field.template';

// -------------
// CONFIGURATION
// -------------

export default {
	title: 'Components/Text-Field/Clear',
	component: 'obj-text-field',
	argTypes: Controls(),
	parameters: Params()
} as Meta;

// -------
// STORIES
// -------

export const Label = Story({
	args: {
		type: 'clear',
		label: 'Username',
	}
});

export const Value = Story({
	args: {
		type: 'clear',
		label: 'Username',
		value: 'Lorem Ipsum Dolor'
	}
});

export const Placeholder = Story({
	args: {
		type: 'clear',
		label: 'Username',
		placeholder: 'e.g. user@site.com'
	}
});

export const Message = Story({
	args: {
		type: 'clear',
		label: 'Username',
		message: 'Must be at least 8 characters long'
	}
});

export const Error = Story({
	args: {
		type: 'clear',
		label: 'Username',
		error: true,
		message: 'Field is required'
	}
});

export const Disabled = Story({
	args: {
		type: 'clear',
		label: 'Username',
		value: 'Lorem Ipsum Dolor',
		disabled: true
	}
});

export const Invert = Story({
	args: {
		type: 'clear',
		label: 'Username',
		value: 'Lorem Ipsum Dolor',
		invert: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
});

export const InvertDisabled = Story({
	name: 'Invert + Disabled',
	args: {
		type: 'clear',
		label: 'Username',
		value: 'Lorem Ipsum Dolor',
		invert: true,
		disabled: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
});