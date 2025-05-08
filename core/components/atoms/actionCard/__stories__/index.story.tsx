import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionCard } from '@/index';

const meta = {
  title: 'Components/actionCard/index',
  component: ActionCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ActionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <ActionCard>
          index Example
        </ActionCard>
      </div>
    );
  }
};
