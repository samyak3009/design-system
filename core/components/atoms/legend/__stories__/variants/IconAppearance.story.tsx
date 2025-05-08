import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Legend } from '@/index';

const meta = {
  title: 'Components/legend/IconAppearance',
  component: Legend,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Legend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconAppearance: Story = {
  render: () => (
    <div>
      <Legend>
        IconAppearance Example
      </Legend>
    </div>
  )
};
