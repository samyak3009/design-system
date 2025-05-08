import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@/index';

const meta = {
  title: 'Components/dropdown/LabelOnTop',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelOnTop: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Dropdown>
          LabelOnTop Example
        </Dropdown>
      </div>
    );
  }
};
