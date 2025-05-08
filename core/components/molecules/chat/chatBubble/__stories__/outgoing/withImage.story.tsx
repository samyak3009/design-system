import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chat } from '@/index';

const meta = {
  title: 'Components/chat/chatBubble/outgoing/withImage',
  component: Chat,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withImage: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Chat>
          withImage Example
        </Chat>
      </div>
    );
  }
};
