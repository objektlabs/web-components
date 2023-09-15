import type { Meta } from '@storybook/web-components';

import { Controls, Story } from './obj-button.template';

// -------------
// CONFIGURATION
// -------------

export default {
	title: 'Components/Button/Secondary',
	component: 'obj-button',
	argTypes: Controls()
} as Meta;

// -------
// STORIES
// -------

export const Default = Story({
	args: {
		type: 'secondary',
		label: 'Secondary'
	}
});

export const Disabled = Story({
	args: {
		type: 'secondary',
		label: 'Secondary',
		disabled: true
	}
});

export const Invert = Story({
	args: {
		type: 'secondary',
		label: 'Secondary',
		invert: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
});

export const InvertDisabled = Story({
	name: 'Invert + Disabled',
	args: {
		type: 'secondary',
		label: 'Secondary',
		disabled: true,
		invert: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
});