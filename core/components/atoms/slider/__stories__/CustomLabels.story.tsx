import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@/index';

const meta = {
  title: 'Components/slider/CustomLabels',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomLabels: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Slider>
          CustomLabels Example
        </Slider>
      </div>
    );
  }
};
