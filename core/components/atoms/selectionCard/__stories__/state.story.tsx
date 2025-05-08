import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectionCard } from '@/index';

const meta = {
  title: 'Components/selectionCard/state',
  component: SelectionCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SelectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const state: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <SelectionCard>
          state Example
        </SelectionCard>
      </div>
    );
  }
};
