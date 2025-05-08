import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KeyValuePair } from '@/index';

const meta = {
  title: 'Components/keyValuePair/width/topBottom',
  component: KeyValuePair,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof KeyValuePair>;

export default meta;
type Story = StoryObj<typeof meta>;

export const topBottom: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <KeyValuePair>
          topBottom Example
        </KeyValuePair>
      </div>
    );
  }
};
