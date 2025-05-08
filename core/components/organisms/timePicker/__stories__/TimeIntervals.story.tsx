import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from '@/index';

const meta = {
  title: 'Components/timePicker/TimeIntervals',
  component: TimePicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TimeIntervals: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <TimePicker>
          TimeIntervals Example
        </TimePicker>
      </div>
    );
  }
};
