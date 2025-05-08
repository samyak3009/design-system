import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '@/index';

const meta = {
  title: 'Components/dateRangePicker/variants/monthsInView',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const monthsInView: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <DateRangePicker>
          monthsInView Example
        </DateRangePicker>
      </div>
    );
  }
};
