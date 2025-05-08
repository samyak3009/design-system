import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chat } from '@/index';

const meta = {
  title: 'Components/chat/chatBubble/incoming/Incoming',
  component: Chat,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Incoming: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Chat>
          Incoming Example
        </Chat>
      </div>
    );
  }
};
