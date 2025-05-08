import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@/index';

const meta = {
  title: 'Components/text/index',
  component: Text,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Text>
          index Example
        </Text>
      </div>
    );
  }
};
