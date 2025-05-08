import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VerificationCodeInput } from '@/index';

const meta = {
  title: 'Components/verificationCodeInput/variants/Error',
  component: VerificationCodeInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof VerificationCodeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <VerificationCodeInput>
          Error Example
        </VerificationCodeInput>
      </div>
    );
  }
};
