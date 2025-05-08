import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/index';

const meta = {
  title: 'Components/card/nested',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const nested: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Card>
          nested Example
        </Card>
      </div>
    );
  }
};
