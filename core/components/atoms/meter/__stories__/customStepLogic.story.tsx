import type { Meta, StoryObj } from "@storybook/react";
import { Meter } from "@/index";

const meta = {
  title: "Components/Meter/Custom Step Logic",
  component: Meter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Meter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomStepLogic: Story = {
  args: {
    getFilledSteps: "({",
  },
};

