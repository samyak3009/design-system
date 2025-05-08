import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '@/index';

const meta = {
  title: 'Components/popover/Menu',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Menu: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Popover>
          Menu Example
        </Popover>
      </div>
    );
  }
};
