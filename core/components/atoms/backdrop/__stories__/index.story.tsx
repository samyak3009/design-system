import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from '@/index';

const meta = {
  title: 'Components/backdrop/index',
  component: Backdrop,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Backdrop>
          index Example
        </Backdrop>
      </div>
    );
  }
};
