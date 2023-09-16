import type { Meta } from '@storybook/web-components';

import { Controls, Params, Story } from './obj-text-field.template';

// -------------
// CONFIGURATION
// -------------

export default {
	title: 'Components/Text-Field/Filled',
	component: 'obj-text-field',
	argTypes: Controls(),
	parameters: Params()
} as Meta;

// -------
// STORIES
// -------

export const Label = Story({
	args: {
		type: 'filled',
		label: 'Username',
	}
});

export const Value = Story({
	args: {
		type: 'filled',
		label: 'Username',
		value: 'Hello World'
	}
});

export const Placeholder = Story({
	args: {
		type: 'filled',
		label: 'Username',
		placeholder: 'e.g. user@site.com'
	}
});

export const Message = Story({
	args: {
		type: 'filled',
		label: 'Username',
		message: 'Must be at least 8 characters long'
	}
});

export const Error = Story({
	args: {
		type: 'filled',
		label: 'Username',
		error: true,
		message: 'Field is required'
	}
});

export const Disabled = Story({
	args: {
		type: 'filled',
		label: 'Username',
		value: 'Hello World',
		disabled: true
	}
});

export const Invert = Story({
	args: {
		type: 'filled',
		label: 'Username',
		value: 'Hello World',
		invert: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
});

export const InvertDisabled = Story({
	name: 'Invert + Disabled',
	args: {
		type: 'filled',
		label: 'Username',
		value: 'Hello World',
		invert: true,
		disabled: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
});