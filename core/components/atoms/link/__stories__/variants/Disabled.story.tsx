import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@/index';

const meta = {
  title: 'Components/link/variants/Disabled',
  component: Link,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Link>
          Disabled Example
        </Link>
      </div>
    );
  }
};
