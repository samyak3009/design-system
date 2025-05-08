import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chat } from '@/index';

const meta = {
  title: 'Components/chat/chatBubble/outgoing/failedMessage',
  component: Chat,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const failedMessage: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Chat>
          failedMessage Example
        </Chat>
      </div>
    );
  }
};
