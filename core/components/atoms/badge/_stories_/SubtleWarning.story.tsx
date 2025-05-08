import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/index';

const meta = {
  title: 'Components/badge/_stories_/SubtleWarning',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubtleWarning: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Badge>
          SubtleWarning Example
        </Badge>
      </div>
    );
  }
};
