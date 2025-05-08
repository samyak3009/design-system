import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@/index';

const meta = {
  title: 'Components/heading/index',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Heading>
          index Example
        </Heading>
      </div>
    );
  }
};
