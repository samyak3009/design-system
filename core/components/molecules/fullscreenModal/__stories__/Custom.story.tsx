import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FullscreenModal } from '@/index';

const meta = {
  title: 'Components/fullscreenModal/Custom',
  component: FullscreenModal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FullscreenModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Custom: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <FullscreenModal>
          Custom Example
        </FullscreenModal>
      </div>
    );
  }
};
