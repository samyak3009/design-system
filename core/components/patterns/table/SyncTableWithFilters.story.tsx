import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@/index';

const meta = {
  title: 'Components/table/SyncTableWithFilters',
  component: Table,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SyncTableWithFilters: Story = {
  render: () => (
    <div>
      <Table>
        SyncTableWithFilters Example
      </Table>
    </div>
  )
};
