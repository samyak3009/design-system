import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/index';

const meta = {
  title: 'Components/button/IconButtonGroup',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconButtonGroup: Story = {
  render: () => (
    <div>
      <Button>
        IconButtonGroup Example
      </Button>
    </div>
  )
};
