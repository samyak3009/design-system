import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@/index';

const meta = {
  title: 'Components/calendar/firstDayOfWeek',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const firstDayOfWeek: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Calendar>
          firstDayOfWeek Example
        </Calendar>
      </div>
    );
  }
};
