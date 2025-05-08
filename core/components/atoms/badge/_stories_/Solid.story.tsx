import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/index';

const meta = {
  title: 'Components/badge/_stories_/Solid',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Badge>
          Solid Example
        </Badge>
      </div>
    );
  }
};
