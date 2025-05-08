import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionCard } from '@/index';

const meta = {
  title: 'Components/actionCard/layout',
  component: ActionCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ActionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const layout: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <ActionCard>
          layout Example
        </ActionCard>
      </div>
    );
  }
};
