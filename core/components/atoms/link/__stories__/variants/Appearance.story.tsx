import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@/index';

const meta = {
  title: 'Components/link/variants/Appearance',
  component: Link,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Appearance: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Link>
          Appearance Example
        </Link>
      </div>
    );
  }
};
