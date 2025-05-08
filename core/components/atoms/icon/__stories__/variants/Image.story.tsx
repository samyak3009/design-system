import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@/index';

const meta = {
  title: 'Components/icon/variants/Image',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Icon>
          Image Example
        </Icon>
      </div>
    );
  }
};
