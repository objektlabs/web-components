import type { Meta, StoryObj } from '@storybook/web-components';

import { withActions } from '@storybook/addon-actions/decorator';
import { html, TemplateResult } from 'lit';

import '../components/obj-button';

// -------------
// CONFIGURATION
// -------------

export default {
	title: 'Components/Button/Primary',
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
		type: 'primary',
		label: 'Primary'
	}
};

export const Disabled: StoryObj = {
	args: {
		type: 'primary',
		label: 'Primary',
		disabled: true
	}
};

export const Invert: StoryObj = {
	args: {
		type: 'primary',
		label: 'Primary',
		invert: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
};

export const InvertDisabled: StoryObj = {
	name: 'Invert + Disabled',
	args: {
		type: 'primary',
		label: 'Primary',
		disabled: true,
		invert: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
};