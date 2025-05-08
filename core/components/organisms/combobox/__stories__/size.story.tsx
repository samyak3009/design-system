import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from '@/index';

const meta = {
  title: 'Components/combobox/size',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const size: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Combobox>
          size Example
        </Combobox>
      </div>
    );
  }
};
