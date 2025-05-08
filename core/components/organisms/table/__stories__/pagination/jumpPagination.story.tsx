import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@/index';

const meta = {
  title: 'Components/table/pagination/jumpPagination',
  component: Table,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const jumpPagination: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Table>
          jumpPagination Example
        </Table>
      </div>
    );
  }
};
