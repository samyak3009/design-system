import React from 'react';
import { Button } from '@/index';

export default {
  title: 'Components/Button/Button/Sizes',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button has different sizes',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['tiny', 'regular', 'large'],
      description: 'Size of the button',
    },
    appearance: {
      control: 'select',
      options: ['basic', 'primary', 'alert', 'transparent'],
      description: 'Appearance of the button',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
    icon: {
      control: 'text',
      description: 'Icon name to display',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
  },
};

// Single button with controls
export const SingleButton = (args) => (
  <Button {...args}>
    {args.children || 'Button'}
  </Button>
);

SingleButton.args = {
  size: 'regular',
  appearance: 'primary',
  'aria-label': 'Button',
  children: 'Button',
};

SingleButton.parameters = {
  docs: {
    description: {
      story: 'Button with different sizes that can be customized using controls',
    },
  },
};

// Multiple buttons showing all sizes
export const ButtonSizes = () => {
  const sizes = ['tiny', 'regular', 'large'] as const;

  return (
    <div className="d-flex justify-content-between w-50">
      {sizes.map((buttonSize, ind) => {
        return (
          <Button
            key={ind}
            size={buttonSize}
            appearance={'primary'}
            aria-label={`${buttonSize}`}
          >
            {buttonSize.charAt(0).toUpperCase() + buttonSize.slice(1)}
          </Button>
        );
      })}
    </div>
  );
};
