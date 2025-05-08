import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@/index';

const meta = {
  title: 'Components/paragraph/index',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Paragraph>
          index Example
        </Paragraph>
      </div>
    );
  }
};
