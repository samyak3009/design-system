import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VerificationCodeInput } from '@/index';

const meta = {
  title: 'Components/verificationCodeInput/fourFields',
  component: VerificationCodeInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof VerificationCodeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const fourFields: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <VerificationCodeInput>
          fourFields Example
        </VerificationCodeInput>
      </div>
    );
  }
};
