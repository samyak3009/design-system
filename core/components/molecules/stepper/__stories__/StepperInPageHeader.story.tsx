import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '@/index';

const meta = {
  title: 'Components/stepper/StepperInPageHeader',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StepperInPageHeader: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Stepper>
          StepperInPageHeader Example
        </Stepper>
      </div>
    );
  }
};
