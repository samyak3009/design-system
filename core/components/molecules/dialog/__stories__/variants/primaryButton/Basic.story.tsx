import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '@/index';

const meta = {
  title: 'Components/dialog/variants/primaryButton/Basic',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Dialog>
          Basic Example
        </Dialog>
      </div>
    );
  }
};
