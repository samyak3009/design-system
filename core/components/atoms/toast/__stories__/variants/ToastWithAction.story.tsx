import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '@/index';

const meta = {
  title: 'Components/toast/ToastWithAction',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToastWithAction: Story = {
  render: () => (
    <div>
      <Toast>
        ToastWithAction Example
      </Toast>
    </div>
  )
};
