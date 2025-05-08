import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@/index';

const meta = {
  title: 'Components/modal/variants/dimension/Medium',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Modal>
          Medium Example
        </Modal>
      </div>
    );
  }
};
