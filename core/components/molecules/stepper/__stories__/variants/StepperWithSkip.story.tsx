import type { Meta, StoryObj } from "@storybook/react";
import { Stepper, Button } from "@/index";

const meta = {
  title: "Components/Stepper/Variants/Stepper With Skip",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StepperWithSkip: Story = {
  args: {
    steps: "[",
    maxSteps: "steps.length",
    onChange: "(activeStep)",
  },
};

