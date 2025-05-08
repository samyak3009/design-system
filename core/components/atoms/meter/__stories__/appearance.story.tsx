import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Meter } from '@/index';

const meta = {
  title: 'Components/meter/appearance',
  component: Meter,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Meter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const appearance: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Meter>
          appearance Example
        </Meter>
      </div>
    );
  }
};
