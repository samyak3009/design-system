import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '@/index';

const meta = {
  title: 'Components/stepper/StepperWithAnimation',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StepperWithAnimation: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Stepper>
          StepperWithAnimation Example
        </Stepper>
      </div>
    );
  }
};
