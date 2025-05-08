import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '@/index';

const meta = {
  title: 'Components/stepper/index',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => (
    <div>
      <Stepper>
        index Example
      </Stepper>
    </div>
  )
};
