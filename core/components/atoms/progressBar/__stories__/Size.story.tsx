import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '@/index';

const meta = {
  title: 'Components/progressBar/Size',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Size: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <ProgressBar>
          Size Example
        </ProgressBar>
      </div>
    );
  }
};
