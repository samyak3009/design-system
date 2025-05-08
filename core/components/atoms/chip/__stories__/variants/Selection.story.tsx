import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@/index';

const meta = {
  title: 'Components/chip/variants/Selection',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selection: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Chip>
          Selection Example
        </Chip>
      </div>
    );
  }
};
