import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VerificationCodeInput } from '@/index';

const meta = {
  title: 'Components/verificationCodeInput/sixFields',
  component: VerificationCodeInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof VerificationCodeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const sixFields: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <VerificationCodeInput>
          sixFields Example
        </VerificationCodeInput>
      </div>
    );
  }
};
