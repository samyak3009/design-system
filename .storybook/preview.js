import '../css';
import './docPage.css';
import { docPage } from '@/utils/docPage';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { primary } from './themes';

export default {
  parameters: {
    docs: {
      theme: primary,
      page: docPage,
      canvas: {
        sourceState: 'shown',
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      element: '#root',
      manual: false,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    options: {
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
