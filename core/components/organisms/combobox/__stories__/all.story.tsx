import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from '@/index';

const meta = {
  title: 'Components/combobox/all',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const all: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Combobox>
          all Example
        </Combobox>
      </div>
    );
  }
};
