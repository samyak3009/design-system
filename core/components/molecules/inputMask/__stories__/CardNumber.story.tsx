import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputMask } from '@/index';

const meta = {
  title: 'Components/inputMask/CardNumber',
  component: InputMask,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputMask>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  render: () => (
    <div>
      <InputMask>
        CardNumber Example
      </InputMask>
    </div>
  )
};
