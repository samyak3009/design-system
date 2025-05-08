import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from '@/index';

const meta = {
  title: 'Components/combobox/controlled',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const controlled: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Combobox>
          controlled Example
        </Combobox>
      </div>
    );
  }
};
