import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@/index';

const meta = {
  title: 'Components/tooltip/index',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Tooltip>
          index Example
        </Tooltip>
      </div>
    );
  }
};
