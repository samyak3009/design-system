import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "@/index";

const meta = {
  title: "Components/Stepper/Variants/Active Step",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveStep: Story = {
  args: {
    onChange: "(index)",
  },
};

