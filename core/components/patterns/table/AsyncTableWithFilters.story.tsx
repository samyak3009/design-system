import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@/index';

const meta = {
  title: 'Components/table/AsyncTableWithFilters',
  component: Table,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsyncTableWithFilters: Story = {
  render: () => (
    <div>
      <Table>
        AsyncTableWithFilters Example
      </Table>
    </div>
  )
};
