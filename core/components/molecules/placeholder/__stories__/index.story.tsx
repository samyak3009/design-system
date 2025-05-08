import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Placeholder } from '@/index';

const meta = {
  title: 'Components/placeholder/index',
  component: Placeholder,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Placeholder>
          index Example
        </Placeholder>
      </div>
    );
  }
};
