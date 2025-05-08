import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/index';

const meta = {
  title: 'Components/label/variants/withInfo',
  component: Label,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withInfo: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Label>
          withInfo Example
        </Label>
      </div>
    );
  }
};
