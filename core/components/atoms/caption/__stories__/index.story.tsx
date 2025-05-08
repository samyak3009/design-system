import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Caption } from '@/index';

const meta = {
  title: 'Components/caption/index',
  component: Caption,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => (
    <div>
      <Caption>
        index Example
      </Caption>
    </div>
  )
};
