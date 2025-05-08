import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Message } from '@/index';

const meta = {
  title: 'Components/message/index',
  component: Message,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Message>
          index Example
        </Message>
      </div>
    );
  }
};
