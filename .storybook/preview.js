import { setCustomElementsManifest } from '@web/storybook-prebuilt/web-components.js';

// Populate custom element metadata into story docs.
const response = await fetch('../custom-elements.json');
setCustomElementsManifest(await response.json());

// Configure global settings for all stories.
export const parameters = {
    backgrounds: {
        values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#202124' },
        ],
    },
    /*theme: {
        values: [
            { name: 'basic', value: '#ffffff' },
            { name: 'easy', value: '#202124' },
        ],
    }*/
  };