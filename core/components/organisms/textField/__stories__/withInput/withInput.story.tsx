import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@/index';

const meta = {
  title: 'Components/textField/withInput/withInput',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withInput: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <TextField>
          withInput Example
        </TextField>
      </div>
    );
  }
};
