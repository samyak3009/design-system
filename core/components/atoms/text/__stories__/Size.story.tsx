import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@/index';

const meta = {
  title: 'Components/text/Size',
  component: Text,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Size: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Text>
          Size Example
        </Text>
      </div>
    );
  }
};
