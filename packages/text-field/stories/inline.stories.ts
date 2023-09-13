import type { Meta, StoryObj } from '@storybook/web-components';

import { withActions } from '@storybook/addon-actions/decorator';
import { html, TemplateResult } from 'lit';

import '../components/obj-text-field';

// -------------
// CONFIGURATION
// -------------

export default {
	title: 'Components/Text-Field/Inline',
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
	},
	decorators: [withActions],
	tags: ['autodocs']
} as Meta;

// -------
// STORIES
// -------

export const Label: StoryObj = {
	args: {
		type: 'inline',
		label: 'Username',
	}
};

export const Value: StoryObj = {
	args: {
		type: 'inline',
		label: 'Username',
		value: 'Hello World'
	}
};

export const Placeholder: StoryObj = {
	args: {
		type: 'inline',
		label: 'Username',
		placeholder: 'e.g. user@site.com'
	}
};

export const Message: StoryObj = {
	args: {
		type: 'inline',
		label: 'Username',
		message: 'Must be at least 8 characters long'
	}
};

export const Error: StoryObj = {
	args: {
		type: 'inline',
		label: 'Username',
		error: true,
		message: 'Field is required'
	}
};

export const Disabled: StoryObj = {
	args: {
		type: 'inline',
		label: 'Username',
		value: 'Hello World',
		disabled: true
	}
};

export const Invert: StoryObj = {
	args: {
		type: 'inline',
		label: 'Username',
		value: 'Hello World',
		invert: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
};

export const InvertDisabled: StoryObj = {
	name: 'Invert + Disabled',
	args: {
		type: 'inline',
		label: 'Username',
		value: 'Hello World',
		invert: true,
		disabled: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
};