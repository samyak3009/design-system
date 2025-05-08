import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InlineMessage } from '@/index';

const meta = {
  title: 'Components/inlineMessage/Size',
  component: InlineMessage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InlineMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Size: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <InlineMessage>
          Size Example
        </InlineMessage>
      </div>
    );
  }
};
