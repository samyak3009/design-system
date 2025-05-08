import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from '@/index';

const meta = {
  title: 'Components/combobox/customOptions',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const customOptions: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Combobox>
          customOptions Example
        </Combobox>
      </div>
    );
  }
};
