import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressRing } from '@/index';

const meta = {
  title: 'Components/progressRing/Size',
  component: ProgressRing,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProgressRing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Size: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <ProgressRing>
          Size Example
        </ProgressRing>
      </div>
    );
  }
};
