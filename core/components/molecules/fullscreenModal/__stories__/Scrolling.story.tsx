import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FullscreenModal } from '@/index';

const meta = {
  title: 'Components/fullscreenModal/Scrolling',
  component: FullscreenModal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FullscreenModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scrolling: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <FullscreenModal>
          Scrolling Example
        </FullscreenModal>
      </div>
    );
  }
};
