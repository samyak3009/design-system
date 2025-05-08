import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@/index';

const meta = {
  title: 'Components/chip/variants/Input',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Chip>
          Input Example
        </Chip>
      </div>
    );
  }
};
