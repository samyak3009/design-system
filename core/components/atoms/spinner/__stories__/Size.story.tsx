import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@/index';

const meta = {
  title: 'Components/spinner/Size',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Size: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Spinner>
          Size Example
        </Spinner>
      </div>
    );
  }
};
