import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@/index';

const meta = {
  title: 'Components/avatar/Presence',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Presence: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Avatar>
          Presence Example
        </Avatar>
      </div>
    );
  }
};
