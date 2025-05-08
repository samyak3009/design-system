import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusHint } from '@/index';

const meta = {
  title: 'Components/statusHint/LabelWrap',
  component: StatusHint,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof StatusHint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelWrap: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <StatusHint>
          LabelWrap Example
        </StatusHint>
      </div>
    );
  }
};
