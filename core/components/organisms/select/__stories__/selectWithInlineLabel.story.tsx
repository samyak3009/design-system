import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@/index';

const meta = {
  title: 'Components/select/selectWithInlineLabel',
  component: Select,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const selectWithInlineLabel: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Select>
          selectWithInlineLabel Example
        </Select>
      </div>
    );
  }
};
