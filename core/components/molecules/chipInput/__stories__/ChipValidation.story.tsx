import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChipInput } from '@/index';

const meta = {
  title: 'Components/chipInput/ChipValidation',
  component: ChipInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChipInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChipValidation: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <ChipInput>
          ChipValidation Example
        </ChipInput>
      </div>
    );
  }
};
