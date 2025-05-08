import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "@/index";

const meta = {
  title: "Components/Progress Indicators/ProgressBar/Indeterminate State",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IndeterminateState: Story = {
  args: {},
};

