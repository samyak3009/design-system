import React from 'react';
import { Icon } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon/All',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Icon component for displaying material icons',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Material icon name',
    },
    size: {
      control: 'number',
      description: 'Size of the icon in pixels',
    },
    type: {
      control: 'select',
      options: ['filled', 'outlined', 'rounded', 'two-tone', 'sharp'],
      description: 'Type of material icon',
    },
    appearance: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'white',
        'subtle',
        'disabled',
        'info',
        'alert',
        'warning',
        'success',
        'primary',
      ],
      description: 'Color of the icon',
    },
  },
  args: {
    name: 'place',
    size: 48,
    type: 'rounded',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const All: Story = {
  render: (args) => <Icon {...args} />,
};
