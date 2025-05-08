import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Placeholder } from '@/index';

const meta = {
  title: 'Components/placeholder/skeletonLoaders',
  component: Placeholder,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const skeletonLoaders: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Placeholder>
          skeletonLoaders Example
        </Placeholder>
      </div>
    );
  }
};
