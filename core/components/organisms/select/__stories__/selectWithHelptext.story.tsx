import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@/index';

const meta = {
  title: 'Components/select/selectWithHelptext',
  component: Select,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const selectWithHelptext: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Select>
          selectWithHelptext Example
        </Select>
      </div>
    );
  }
};
