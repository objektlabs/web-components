import type { Meta } from '@storybook/web-components';

import { Controls, Story } from './obj-button.template';

// -------------
// CONFIGURATION
// -------------

export default {
	title: 'Components/Button/Clear',
	component: 'obj-button',
	argTypes: Controls()
} as Meta;

// -------
// STORIES
// -------

export const Default = Story({
	args: {
		type: 'clear',
		label: 'Clear'
	}
});

export const Disabled = Story({
	args: {
		type: 'clear',
		label: 'Clear',
		disabled: true
	}
});

export const Invert = Story({
	args: {
		type: 'clear',
		label: 'Clear',
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
		label: 'Clear',
		disabled: true,
		invert: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
});