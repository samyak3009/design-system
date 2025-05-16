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
  argTypes: {
    appearance: {
      control: 'select',
      options: ['basic', 'primary', 'alert', 'transparent'],
      description: 'Appearance of the button',
    },
    size: {
      control: 'select',
      options: ['tiny', 'regular', 'large'],
      description: 'Size of the button',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
  },
};

// Single customizable button
export const SingleButton = (args) => (
  <Button {...args}>
    {args.children || args.appearance.charAt(0).toUpperCase() + args.appearance.slice(1)}
  </Button>
);

SingleButton.args = {
  appearance: 'primary',
  size: 'regular',
  children: 'Primary',
  'aria-label': 'Button',
};

// All appearance variants
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
