import type { Meta, StoryObj } from "@storybook/react";
import { ProgressRing } from "@/index";

const meta = {
  title: "Components/Progress Indicators/ProgressRing/All",
  component: ProgressRing,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProgressRing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    value: "50",
    max: "100",
  },
};

