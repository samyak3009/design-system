import React from 'react';
import { Sara } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sara> = {
  title: 'Components/AI/Sara/All',
  component: Sara,
  parameters: {
    docs: {
      description: {
        component: 'Sara is the avatar used for artificial intelligence',
      },
    },
  },
  argTypes: {
    size: {
      control: 'number',
      description: 'Size of Sara in pixels',
    },
    state: {
      control: 'select',
      options: ['default', 'resting'],
      description: 'State of Sara',
    },
    alt: {
      control: 'text',
      description: 'Alt text for Sara image',
    },
  },
  args: {
    size: 32,
    state: 'default',
    alt: 'Sara AI avatar',
  },
};

export default meta;
type Story = StoryObj<typeof Sara>;

export const All: Story = {
  render: (args) => <Sara {...args} />,
};
