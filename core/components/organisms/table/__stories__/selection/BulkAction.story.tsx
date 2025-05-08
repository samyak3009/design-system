import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@/index';

const meta = {
  title: 'Components/table/selection/BulkAction',
  component: Table,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BulkAction: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Table>
          BulkAction Example
        </Table>
      </div>
    );
  }
};
