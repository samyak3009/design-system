import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '@/index';

const meta = {
  title: 'Components/dialog/variants/dimension/Large',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Dialog>
          Large Example
        </Dialog>
      </div>
    );
  }
};
