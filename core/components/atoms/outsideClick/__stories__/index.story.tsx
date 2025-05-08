import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OutsideClick } from '@/index';

const meta = {
  title: 'Components/outsideClick/index',
  component: OutsideClick,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof OutsideClick>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <OutsideClick>
          index Example
        </OutsideClick>
      </div>
    );
  }
};
