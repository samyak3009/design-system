import React from 'react';
import { Sara } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sara> = {
  title: 'Components/AI/Sara/Custom Size',
  component: Sara,
  parameters: {
    docs: {
      description: {
        component: 'Sara can be customized to any size',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sara>;

export const CustomSize: Story = {
  render: () => <Sara size={100} />,
};
