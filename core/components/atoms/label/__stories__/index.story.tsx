import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/index';

const meta = {
  title: 'Components/label/index',
  component: Label,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Label>
          index Example
        </Label>
      </div>
    );
  }
};
