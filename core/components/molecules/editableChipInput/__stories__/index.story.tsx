import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EditableChipInput } from '@/index';

const meta = {
  title: 'Components/editableChipInput/index',
  component: EditableChipInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EditableChipInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <EditableChipInput>
          index Example
        </EditableChipInput>
      </div>
    );
  }
};
