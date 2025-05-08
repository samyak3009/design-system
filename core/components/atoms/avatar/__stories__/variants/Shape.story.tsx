import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@/index';

const meta = {
  title: 'Components/avatar/variants/Shape',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shape: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Avatar>
          Shape Example
        </Avatar>
      </div>
    );
  }
};
