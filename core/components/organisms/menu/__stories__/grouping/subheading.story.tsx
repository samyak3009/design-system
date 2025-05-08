import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '@/index';

const meta = {
  title: 'Components/menu/grouping/subheading',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const subheading: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Menu>
          subheading Example
        </Menu>
      </div>
    );
  }
};
