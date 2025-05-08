import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@/index';

const meta = {
  title: 'Components/pagination/Basic',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div>
      <Pagination>
        Basic Example
      </Pagination>
    </div>
  )
};
