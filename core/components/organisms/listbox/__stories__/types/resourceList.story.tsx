import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Listbox } from '@/index';

const meta = {
  title: 'Components/listbox/types/resourceList',
  component: Listbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const resourceList: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Listbox>
          resourceList Example
        </Listbox>
      </div>
    );
  }
};
