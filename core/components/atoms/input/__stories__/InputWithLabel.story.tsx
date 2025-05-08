import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/index';

const meta = {
  title: 'Components/input/InputWithLabel',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputWithLabel: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Input>
          InputWithLabel Example
        </Input>
      </div>
    );
  }
};
