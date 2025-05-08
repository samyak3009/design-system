import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '@/index';

const meta = {
  title: 'Components/popover/DisabledTrigger',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DisabledTrigger: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Popover>
          DisabledTrigger Example
        </Popover>
      </div>
    );
  }
};
