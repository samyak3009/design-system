import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/index';

const meta = {
  title: 'Components/button/state/Basic',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Button>
          Basic Example
        </Button>
      </div>
    );
  }
};
