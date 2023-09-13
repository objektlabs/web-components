import type { Meta, StoryObj } from '@storybook/web-components';

import { withActions } from '@storybook/addon-actions/decorator';
import { html, TemplateResult } from 'lit';

import '../components/obj-button';

// -------------
// CONFIGURATION
// -------------

export default {
	title: 'Components/Button/Clear',
	component: 'obj-button',
	argTypes: {
		type: {
			control: { type: 'radio' },
			options: ['primary', 'secondary', 'clear']
		}
	},
	parameters: {
		actions: {
			handles: ['click', 'contextmenu']
		},
	},
	decorators: [withActions],
	tags: ['autodocs']
} as Meta;

// -------
// STORIES
// -------

export const Default: StoryObj = {
	args: {
		type: 'clear',
		label: 'Clear'
	}
};

export const Disabled: StoryObj = {
	args: {
		type: 'clear',
		label: 'Clear',
		disabled: true
	}
};

export const Invert: StoryObj = {
	args: {
		type: 'clear',
		label: 'Clear',
		invert: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
};

export const InvertDisabled: StoryObj = {
	name: 'Invert + Disabled',
	args: {
		type: 'clear',
		label: 'Clear',
		disabled: true,
		invert: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
};