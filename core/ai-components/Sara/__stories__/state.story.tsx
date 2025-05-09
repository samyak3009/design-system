import React from 'react';
import { Sara, Text } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sara> = {
  title: 'Components/AI/Sara/States',
  component: Sara,
  parameters: {
    docs: {
      description: {
        component: 'Sara has different states that can be used based on the context',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sara>;

export const States: Story = {
  render: () => (
    <div className="d-flex w-75">
      <div className="d-flex flex-column align-items-center text-align-center w-100">
        <Sara />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </div>
      <div className="d-flex flex-column align-items-center text-align-center w-100">
        <Sara state="resting" />
        <Text appearance="subtle" className="mt-6">
          Resting
        </Text>
      </div>
    </div>
  ),
};
