import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EditableInput } from '@/index';

const meta = {
  title: 'Components/editableInput/variants/Size',
  component: EditableInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EditableInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Size: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <EditableInput>
          Size Example
        </EditableInput>
      </div>
    );
  }
};
