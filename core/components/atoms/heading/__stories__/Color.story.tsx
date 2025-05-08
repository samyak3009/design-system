import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@/index';

const meta = {
  title: 'Components/heading/Color',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Color: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Heading>
          Color Example
        </Heading>
      </div>
    );
  }
};
