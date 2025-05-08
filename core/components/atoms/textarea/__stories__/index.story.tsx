import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/index';

const meta = {
  title: 'Components/textarea/index',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Textarea>
          index Example
        </Textarea>
      </div>
    );
  }
};
