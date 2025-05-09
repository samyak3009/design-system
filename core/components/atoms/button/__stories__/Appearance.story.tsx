import React from 'react';
import { Button } from '@/index';

export default {
  title: 'Components/Button/Button/Appearance/All',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button component with different appearances',
      },
    },
  },
};

export const All = () => {
  const appearances = ['basic', 'primary', 'alert', 'transparent'] as const;

  return (
    <div className="d-flex w-75 justify-content-between">
      {appearances.map((appear, ind) => {
        return (
          <Button key={ind} appearance={appear} aria-label={`${appear}`}>
            {appear.charAt(0).toUpperCase() + appear.slice(1)}
          </Button>
        );
      })}
    </div>
  );
};
