import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@/index';

const meta = {
  title: 'Components/select/preFilledValue',
  component: Select,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const preFilledValue: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Select>
          preFilledValue Example
        </Select>
      </div>
    );
  }
};
