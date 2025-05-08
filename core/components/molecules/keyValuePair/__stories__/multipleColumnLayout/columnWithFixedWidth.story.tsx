import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KeyValuePair } from '@/index';

const meta = {
  title: 'Components/keyValuePair/multipleColumnLayout/columnWithFixedWidth',
  component: KeyValuePair,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof KeyValuePair>;

export default meta;
type Story = StoryObj<typeof meta>;

export const columnWithFixedWidth: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <KeyValuePair>
          columnWithFixedWidth Example
        </KeyValuePair>
      </div>
    );
  }
};
