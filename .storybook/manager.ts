import { addons } from '@storybook/manager-api';

import objektDarkTheme from './themes/objekt-dark';

addons.setConfig({
	// Disable Storybook's default keyboard shortcut behavior.
	// See: https://storybook.js.org/docs/web-components/configure/features-and-behavior
	enableShortcuts: false,

	// Set the Storybook UI theme.
	// See: https://storybook.js.org/docs/web-components/configure/theming
	theme: objektDarkTheme
});