import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@/index';

const meta = {
  title: 'Components/link/index',
  component: Link,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Link>
          index Example
        </Link>
      </div>
    );
  }
};
