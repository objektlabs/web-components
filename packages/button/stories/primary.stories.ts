import type { Meta } from '@storybook/web-components';

import { Controls, Story } from './obj-button.template';

// -------------
// CONFIGURATION
// -------------

export default {
	title: 'Components/Button/Primary',
	displayName: 'Test',
	component: 'obj-button',
	argTypes: Controls(),
	parameters: {
		docs: {
			controls: { exclude: ['*'] },
			canvas: {
				sourceState: 'shown'
			},
		},
	},
} as Meta;

// -------
// STORIES
// -------

export const Default = Story({
	args: {
		type: 'primary',
		label: 'Primary'
	}
});

export const Disabled = Story({
	args: {
		type: 'primary',
		label: 'Primary',
		disabled: true
	}
});

export const Invert = Story({
	args: {
		type: 'primary',
		label: 'Primary',
		invert: true
	},
	parameters: {
		backgrounds: { default: 'dark' },
	}
});

export const InvertDisabled = Story({
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
});