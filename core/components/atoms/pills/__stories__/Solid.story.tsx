import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pills } from '@/index';

const meta = {
  title: 'Components/pills/Solid',
  component: Pills,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Pills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Pills>
          Solid Example
        </Pills>
      </div>
    );
  }
};
