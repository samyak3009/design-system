import React from 'react';
import '../css';
import './styles.css';
import './ai-components.css';
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
      page: docPage
    },
    viewMode: 'docs',
    actions: { argTypesRegex: "^on[A-Z].*" },
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
    controls: { expanded: true },
    options: {
      /**
       * function to sort stories in the tree view
       * common use is alphabetical `(a, b) => a[1].id.localeCompare(b[1].id)`
       * if left undefined, then the order in which the stories are imported will
       * be the order they display
       * @type {Function}
       */
      storySort: (a, b) => {
        const getComponentName = story => {
          const splits = story.kind.split('/');
          return splits[splits.length - 2];
        };

        let aComponent = getComponentName(a[1]);
        let bComponent = getComponentName(b[1]);
        if (aComponent === bComponent) {
          if (a[1].story === 'All') return 0;
          if (b[1].story === 'All') return 1;
        }
        return a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
      },
    }
  }
};

export default preview;

export const tags = ['autodocs'];

