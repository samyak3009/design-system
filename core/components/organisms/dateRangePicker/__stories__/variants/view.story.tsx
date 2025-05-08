import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '@/index';

const meta = {
  title: 'Components/dateRangePicker/variants/view',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const view: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <DateRangePicker>
          view Example
        </DateRangePicker>
      </div>
    );
  }
};
