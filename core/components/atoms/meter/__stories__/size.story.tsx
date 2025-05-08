import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Meter } from '@/index';

const meta = {
  title: 'Components/meter/size',
  component: Meter,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Meter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const size: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Meter>
          size Example
        </Meter>
      </div>
    );
  }
};
