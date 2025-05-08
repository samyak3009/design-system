import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/index';

const meta = {
  title: 'Components/button/index',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Button>
          index Example
        </Button>
      </div>
    );
  }
};
