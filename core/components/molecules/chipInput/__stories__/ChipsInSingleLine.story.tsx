import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChipInput } from '@/index';

const meta = {
  title: 'Components/chipInput/ChipsInSingleLine',
  component: ChipInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChipInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChipsInSingleLine: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <ChipInput>
          ChipsInSingleLine Example
        </ChipInput>
      </div>
    );
  }
};
