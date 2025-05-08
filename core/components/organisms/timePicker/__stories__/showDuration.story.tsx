import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from '@/index';

const meta = {
  title: 'Components/timePicker/showDuration',
  component: TimePicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const showDuration: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <TimePicker>
          showDuration Example
        </TimePicker>
      </div>
    );
  }
};
