import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@/index';

const meta = {
  title: 'Components/select/selectWithSearch',
  component: Select,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const selectWithSearch: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Select>
          selectWithSearch Example
        </Select>
      </div>
    );
  }
};
