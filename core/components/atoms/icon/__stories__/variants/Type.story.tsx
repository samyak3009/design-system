import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@/index';

const meta = {
  title: 'Components/icon/variants/Type',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Type: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Icon>
          Type Example
        </Icon>
      </div>
    );
  }
};
