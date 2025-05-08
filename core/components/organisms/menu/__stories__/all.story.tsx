import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '@/index';

const meta = {
  title: 'Components/menu/all',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const all: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Menu>
          all Example
        </Menu>
      </div>
    );
  }
};
