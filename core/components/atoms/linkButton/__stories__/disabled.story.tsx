import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from '@/index';

const meta = {
  title: 'Components/linkButton/disabled',
  component: LinkButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const disabled: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <LinkButton>
          disabled Example
        </LinkButton>
      </div>
    );
  }
};
