import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '@/index';

const meta = {
  title: 'Components/popover/index',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Popover>
          index Example
        </Popover>
      </div>
    );
  }
};
