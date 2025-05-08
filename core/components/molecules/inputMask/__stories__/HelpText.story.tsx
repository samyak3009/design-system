import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputMask } from '@/index';

const meta = {
  title: 'Components/inputMask/HelpText',
  component: InputMask,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputMask>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HelpText: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <InputMask>
          HelpText Example
        </InputMask>
      </div>
    );
  }
};
