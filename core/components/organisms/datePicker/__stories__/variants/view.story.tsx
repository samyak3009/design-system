import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@/index';

const meta = {
  title: 'Components/datePicker/variants/view',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const view: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <DatePicker>
          view Example
        </DatePicker>
      </div>
    );
  }
};
