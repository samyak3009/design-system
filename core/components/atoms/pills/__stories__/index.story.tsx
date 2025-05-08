import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pills } from '@/index';

const meta = {
  title: 'Components/pills/index',
  component: Pills,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Pills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Pills>
          index Example
        </Pills>
      </div>
    );
  }
};
