import type { Meta } from '@storybook/web-components';

import { Controls, Params, Story } from './obj-text-field.template';

// -------------
// CONFIGURATION
// -------------

export default {
	title: 'Components/Text-Field/Stack',
	component: 'obj-text-field',
	argTypes: Controls(),
	parameters: Params()
} as Meta;

// -------
// STORIES
// -------

export const Label = Story({
	args: {
		type: 'stack',
		label: 'Username',
	}
});

export const Value = Story({
	args: {
		type: 'stack',
		label: 'Username',
		value: 'Hello World'
	}
});

export const Placeholder = Story({
	args: {
		type: 'stack',
		label: 'Username',
		placeholder: 'e.g. user@site.com'
	}
});

export const Message = Story({
	args: {
		type: 'stack',
		label: 'Username',
		message: 'Must be at least 8 characters long'
	}
});

export const Error = Story({
	args: {
		type: 'stack',
		label: 'Username',
		error: true,
		message: 'Field is required'
	}
});

export const Disabled = Story({
	args: {
		type: 'stack',
		label: 'Username',
		value: 'Hello World',
		disabled: true
	}
});

export const Invert = Story({
	args: {
		type: 'stack',
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
		type: 'stack',
		label: 'Username',
		value: 'Hello World',
		invert: true,
		disabled: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
});