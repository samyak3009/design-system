import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from '@/index';

const meta = {
  title: 'Components/combobox/error',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const error: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Combobox>
          error Example
        </Combobox>
      </div>
    );
  }
};
