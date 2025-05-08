import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Column } from '@/index';

const meta = {
  title: 'Components/column/Sizes',
  component: Column,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Column>
          Sizes Example
        </Column>
      </div>
    );
  }
};
