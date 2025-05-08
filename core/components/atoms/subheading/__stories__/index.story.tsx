import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Subheading } from '@/index';

const meta = {
  title: 'Components/subheading/index',
  component: Subheading,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Subheading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Subheading>
          index Example
        </Subheading>
      </div>
    );
  }
};
