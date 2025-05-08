import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@/index';

const meta = {
  title: 'Components/modal/Input',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Modal>
          Input Example
        </Modal>
      </div>
    );
  }
};
