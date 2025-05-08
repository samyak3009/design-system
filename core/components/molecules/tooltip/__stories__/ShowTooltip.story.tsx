import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@/index';

const meta = {
  title: 'Components/tooltip/ShowTooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShowTooltip: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Tooltip>
          ShowTooltip Example
        </Tooltip>
      </div>
    );
  }
};
