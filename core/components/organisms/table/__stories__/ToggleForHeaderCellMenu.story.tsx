import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@/index';

const meta = {
  title: 'Components/table/ToggleForHeaderCellMenu',
  component: Table,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleForHeaderCellMenu: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Table>
          ToggleForHeaderCellMenu Example
        </Table>
      </div>
    );
  }
};
