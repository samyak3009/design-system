import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/index';

const meta = {
  title: 'Components/button/SplitButton',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SplitButton: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Button>
          SplitButton Example
        </Button>
      </div>
    );
  }
};
