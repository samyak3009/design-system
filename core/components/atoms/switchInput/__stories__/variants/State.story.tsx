import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SwitchInput } from '@/index';

const meta = {
  title: 'Components/switchInput/variants/State',
  component: SwitchInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SwitchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const State: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <SwitchInput>
          State Example
        </SwitchInput>
      </div>
    );
  }
};
