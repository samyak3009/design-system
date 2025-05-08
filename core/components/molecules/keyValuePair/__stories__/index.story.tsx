import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KeyValuePair } from '@/index';

const meta = {
  title: 'Components/keyValuePair/index',
  component: KeyValuePair,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof KeyValuePair>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <KeyValuePair>
          index Example
        </KeyValuePair>
      </div>
    );
  }
};
