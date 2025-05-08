import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@/index';

const meta = {
  title: 'Components/modal/old',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const old: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Modal>
          old Example
        </Modal>
      </div>
    );
  }
};
