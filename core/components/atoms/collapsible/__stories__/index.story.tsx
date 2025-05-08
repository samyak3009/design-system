import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible } from '@/index';

const meta = {
  title: 'Components/collapsible/index',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Collapsible>
          index Example
        </Collapsible>
      </div>
    );
  }
};
