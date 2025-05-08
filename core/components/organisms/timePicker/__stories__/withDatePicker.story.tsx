import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from '@/index';

const meta = {
  title: 'Components/timePicker/withDatePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withDatePicker: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <TimePicker>
          withDatePicker Example
        </TimePicker>
      </div>
    );
  }
};
