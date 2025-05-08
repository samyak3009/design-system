import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HelpText } from '@/index';

const meta = {
  title: 'Components/helpText/index',
  component: HelpText,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HelpText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <HelpText>
          index Example
        </HelpText>
      </div>
    );
  }
};
