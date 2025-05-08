import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@/index';

const meta = {
  title: 'Components/chip/variants/Action',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Action: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Chip>
          Action Example
        </Chip>
      </div>
    );
  }
};
