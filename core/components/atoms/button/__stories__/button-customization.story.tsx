import React from 'react';
import { Button } from '@/index';

export default {
  title: 'Components/Button/Button/Customization',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Customizable Button examples with Storybook controls',
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
      description: 'Icon name to display (material icon name)',
    },
    iconAlign: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Alignment of the icon',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading state',
    },
    expanded: {
      control: 'boolean',
      description: 'Expands button to full width',
    },
  },
};

// Basic customizable button
export const CustomizableButton = (args) => (
  <Button {...args}>
    {args.children || 'Click Me'}
  </Button>
);

CustomizableButton.args = {
  size: 'regular',
  appearance: 'primary',
  children: 'Click Me',
  'aria-label': 'Customizable Button',
  icon: 'edit',
  iconAlign: 'left',
  disabled: false,
  loading: false,
  expanded: false,
};

CustomizableButton.parameters = {
  docs: {
    description: {
      story: 'A fully customizable button with all available controls',
    },
  },
};

// Button with icon
export const ButtonWithIcon = (args) => (
  <Button
    icon="edit"
    iconAlign={args.iconAlign}
    appearance={args.appearance}
    size={args.size}
    {...args}
  >
    {args.children || 'Edit'}
  </Button>
);

ButtonWithIcon.args = {
  size: 'regular',
  appearance: 'primary',
  children: 'Edit',
  'aria-label': 'Edit Button',
  iconAlign: 'left',
};

ButtonWithIcon.parameters = {
  docs: {
    description: {
      story: 'Button with an icon that can be positioned on the left or right',
    },
  },
};

// Loading button
export const LoadingButton = (args) => (
  <Button
    loading={true}
    appearance={args.appearance}
    size={args.size}
    {...args}
  >
    {args.children || 'Loading'}
  </Button>
);

LoadingButton.args = {
  size: 'regular',
  appearance: 'primary',
  children: 'Loading',
  'aria-label': 'Loading Button',
};

LoadingButton.parameters = {
  docs: {
    description: {
      story: 'Button in loading state with spinner',
    },
  },
};

// Multiple buttons with different appearances
export const ButtonAppearances = () => {
  const appearances = ['basic', 'primary', 'alert', 'transparent'] as const;

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between w-75 mb-4">
        {appearances.map((appearance, ind) => (
          <Button key={ind} appearance={appearance} aria-label={`${appearance}`}>
            {appearance.charAt(0).toUpperCase() + appearance.slice(1)}
          </Button>
        ))}
      </div>
      <p className="mt-4">Select the CustomizableButton story to experiment with controls</p>
    </div>
  );
};
