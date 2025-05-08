import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EditableChipInput } from '@/index';

const meta = {
  title: 'Components/editableChipInput/Uncontrolled',
  component: EditableChipInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EditableChipInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Uncontrolled: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <EditableChipInput>
          Uncontrolled Example
        </EditableChipInput>
      </div>
    );
  }
};
