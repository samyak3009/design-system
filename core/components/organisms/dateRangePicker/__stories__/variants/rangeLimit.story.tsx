import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '@/index';

const meta = {
  title: 'Components/dateRangePicker/variants/rangeLimit',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const rangeLimit: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <DateRangePicker>
          rangeLimit Example
        </DateRangePicker>
      </div>
    );
  }
};
