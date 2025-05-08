import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '@/index';

const meta = {
  title: 'Components/toast/index',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => (
    <div>
      <Toast>
        index Example
      </Toast>
    </div>
  )
};
