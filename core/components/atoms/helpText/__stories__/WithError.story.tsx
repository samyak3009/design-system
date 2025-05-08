import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HelpText } from '@/index';

const meta = {
  title: 'Components/helpText/WithError',
  component: HelpText,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HelpText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithError: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <HelpText>
          WithError Example
        </HelpText>
      </div>
    );
  }
};
