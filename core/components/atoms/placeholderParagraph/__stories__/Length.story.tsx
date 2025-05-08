import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PlaceholderParagraph } from '@/index';

const meta = {
  title: 'Components/placeholderParagraph/Length',
  component: PlaceholderParagraph,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PlaceholderParagraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Length: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <PlaceholderParagraph>
          Length Example
        </PlaceholderParagraph>
      </div>
    );
  }
};
