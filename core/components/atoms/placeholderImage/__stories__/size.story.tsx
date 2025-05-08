import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PlaceholderImage } from '@/index';

const meta = {
  title: 'Components/placeholderImage/size',
  component: PlaceholderImage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PlaceholderImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const size: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <PlaceholderImage>
          size Example
        </PlaceholderImage>
      </div>
    );
  }
};
