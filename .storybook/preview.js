import React from 'react';
import '../css';
import './docPage.css';
import { docPage } from '@/utils/docPage';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { primary } from './themes';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    )
  ],
  parameters: {
    docs: {
      theme: primary,
      page: docPage,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { expanded: true },
    // Storybook a11y addon configuration
    a11y: {
      // the target DOM element
      element: '#root',
      // sets the execution mode for the addon
      manual: false,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    options: {
      /**
       * function to sort stories in the tree view
       * @type {Function}
       */
      storySort: (a, b) => {
        const getComponentName = story => {
          const splits = story.title.split('/');
          return splits[splits.length - 2];
        };

        let aComponent = getComponentName(a);
        let bComponent = getComponentName(b);
        if (aComponent === bComponent) {
          if (a.name === 'All') return 0;
          if (b.name === 'All') return 1;
        }
        return a.id.localeCompare(b.id, undefined, { numeric: true });
      },
    }
  }
};

export default preview;
