import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from '@/index';

const meta = {
  title: 'Components/emptyState/variants/FailedToLoadData',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FailedToLoadData: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <EmptyState>
          FailedToLoadData Example
        </EmptyState>
      </div>
    );
  }
};
