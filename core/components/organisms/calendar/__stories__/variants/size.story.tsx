import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@/index';

const meta = {
  title: 'Components/calendar/variants/size',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const size: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Calendar>
          size Example
        </Calendar>
      </div>
    );
  }
};
