import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '@/index';

const meta = {
  title: 'Components/dateRangePicker/variants/withSingleInputReverseSelection',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withSingleInputReverseSelection: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <DateRangePicker>
          withSingleInputReverseSelection Example
        </DateRangePicker>
      </div>
    );
  }
};
