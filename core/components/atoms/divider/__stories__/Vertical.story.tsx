import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@/index';

const meta = {
  title: 'Components/divider/Vertical',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Divider>
          Vertical Example
        </Divider>
      </div>
    );
  }
};
