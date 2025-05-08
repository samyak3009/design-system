import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@/index';

const meta = {
  title: 'Components/textField/withTextArea/withTextArea',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withTextArea: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <TextField>
          withTextArea Example
        </TextField>
      </div>
    );
  }
};
