import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from '@/index';

const meta = {
  title: 'Components/linkButton/Size',
  component: LinkButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Size: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <LinkButton>
          Size Example
        </LinkButton>
      </div>
    );
  }
};
