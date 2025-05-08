import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { List } from '@/index';

const meta = {
  title: 'Components/list/index',
  component: List,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <List>
          index Example
        </List>
      </div>
    );
  }
};
