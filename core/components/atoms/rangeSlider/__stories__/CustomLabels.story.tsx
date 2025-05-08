import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from '@/index';

const meta = {
  title: 'Components/rangeSlider/CustomLabels',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomLabels: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <RangeSlider>
          CustomLabels Example
        </RangeSlider>
      </div>
    );
  }
};
