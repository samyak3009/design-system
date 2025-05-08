import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Listbox } from '@/index';

const meta = {
  title: 'Components/listbox/sizes/standard',
  component: Listbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const standard: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Listbox>
          standard Example
        </Listbox>
      </div>
    );
  }
};
