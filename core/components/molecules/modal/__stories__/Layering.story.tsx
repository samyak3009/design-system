import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@/index';

const meta = {
  title: 'Components/modal/Layering',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Layering: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Modal>
          Layering Example
        </Modal>
      </div>
    );
  }
};
