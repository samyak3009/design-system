import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '@/index';

const meta = {
  title: 'Components/radio/variants/State',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const State: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Radio>
          State Example
        </Radio>
      </div>
    );
  }
};
