import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/index';

const meta = {
  title: 'Components/label/variants/Required',
  component: Label,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Required: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Label>
          Required Example
        </Label>
      </div>
    );
  }
};
