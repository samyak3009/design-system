import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectionCard } from '@/index';

const meta = {
  title: 'Components/selectionCard/layout',
  component: SelectionCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SelectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const layout: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <SelectionCard>
          layout Example
        </SelectionCard>
      </div>
    );
  }
};
