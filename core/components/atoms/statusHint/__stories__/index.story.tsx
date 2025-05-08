import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusHint } from '@/index';

const meta = {
  title: 'Components/statusHint/index',
  component: StatusHint,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof StatusHint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <StatusHint>
          index Example
        </StatusHint>
      </div>
    );
  }
};
