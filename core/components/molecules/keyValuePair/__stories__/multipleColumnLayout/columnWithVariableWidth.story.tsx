import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KeyValuePair } from '@/index';

const meta = {
  title: 'Components/keyValuePair/multipleColumnLayout/columnWithVariableWidth',
  component: KeyValuePair,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof KeyValuePair>;

export default meta;
type Story = StoryObj<typeof meta>;

export const columnWithVariableWidth: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <KeyValuePair>
          columnWithVariableWidth Example
        </KeyValuePair>
      </div>
    );
  }
};
