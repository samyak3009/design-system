import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from '@/index';

const meta = {
  title: 'Components/avatarGroup/variants/State',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const State: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <AvatarGroup>
          State Example
        </AvatarGroup>
      </div>
    );
  }
};
