import React from 'react';
import { Button } from '@/index';

export default {
  title: 'Components/Button/Button/Variants',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button variants with different configurations',
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
  },
};

// Primary button
export const Primary = (args) => (
  <Button
    appearance="primary"
    size="regular"
    {...args}
  >
    {args.children || 'Primary Button'}
  </Button>
);

Primary.args = {
  children: 'Primary Button',
};

// Alert button
export const Alert = (args) => (
  <Button
    appearance="alert"
    size="regular"
    {...args}
  >
    {args.children || 'Alert Button'}
  </Button>
);

Alert.args = {
  children: 'Alert Button',
};

// Button with icon on the left
export const IconLeft = (args) => (
  <Button
    appearance="primary"
    icon="edit"
    iconAlign="left"
    size="regular"
    {...args}
  >
    {args.children || 'Icon Left'}
  </Button>
);

IconLeft.args = {
  children: 'Icon Left',
};

// Button with icon on the right
export const IconRight = (args) => (
  <Button
    appearance="primary"
    icon="edit"
    iconAlign="right"
    size="regular"
    {...args}
  >
    {args.children || 'Icon Right'}
  </Button>
);

IconRight.args = {
  children: 'Icon Right',
};

// Disabled button
export const Disabled = (args) => (
  <Button
    appearance="primary"
    disabled={true}
    size="regular"
    {...args}
  >
    {args.children || 'Disabled Button'}
  </Button>
);

Disabled.args = {
  children: 'Disabled Button',
};

// Tiny button
export const Tiny = (args) => (
  <Button
    appearance="primary"
    size="tiny"
    {...args}
  >
    {args.children || 'Tiny'}
  </Button>
);

Tiny.args = {
  children: 'Tiny',
};

// Large button
export const Large = (args) => (
  <Button
    appearance="primary"
    size="large"
    {...args}
  >
    {args.children || 'Large'}
  </Button>
);

Large.args = {
  children: 'Large',
};

// Interactive example showing how to use controls
export const Interactive = () => {
  return (
    <div className="d-flex flex-column">
      <p className="mb-4">
        Select any of the stories above and use the Controls panel to customize the button appearance.
      </p>
      <p className="mb-4">
        For example, try changing the "appearance" control to see different button styles.
      </p>
      <div className="d-flex justify-content-between w-75">
        <Button appearance="primary">Primary</Button>
        <Button appearance="basic">Basic</Button>
        <Button appearance="alert">Alert</Button>
        <Button appearance="transparent">Transparent</Button>
      </div>
    </div>
  );
};
