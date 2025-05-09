import React from 'react';
import { Button } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Button/All',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button component for user interactions',
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
    icon: {
      control: 'text',
      description: 'Icon name to display',
    },
    iconAlign: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Alignment of the icon',
    },
  },
  args: {
    children: 'Open',
    type: 'button',
    appearance: 'primary',
    size: 'regular',
    'aria-label': 'Open',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const All: Story = {
  render: (args) => <Button {...args} />,
};
