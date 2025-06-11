import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { AIChip } from '@/index';

const meta: Meta<typeof AIChip> = {
  title: 'Components/AI/AI Chip',
  component: AIChip,
  parameters: {
    docs: {
      docPage: {
        title: 'AIChip',
      },
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Simple story with default props
export const All: Story = {
  args: {
    icon: 'edit_note',
    label: 'AI chip',
  },
};

// Complex story showing different states
export const States = () => {
  return (
    <div className="d-flex">
      <AIChip icon="edit_note" className="mr-10" label="Default chip" />
      <AIChip icon="edit_note" label="Disabled chip" disabled={true} />
    </div>
  );
};

// Additional simple story variations
export const Default: Story = {
  args: {
    icon: 'edit_note',
    label: 'Default chip',
  },
};

export const Disabled: Story = {
  args: {
    icon: 'edit_note',
    label: 'Disabled chip',
    disabled: true,
  },
};
