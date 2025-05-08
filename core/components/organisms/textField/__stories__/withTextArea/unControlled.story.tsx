import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@/index';

const meta = {
  title: 'Components/textField/withTextArea/unControlled',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const unControlled: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <TextField>
          unControlled Example
        </TextField>
      </div>
    );
  }
};
