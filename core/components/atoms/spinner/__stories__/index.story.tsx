import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@/index";

const meta = {
  title: "Components/Progress Indicators/Spinner/All",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {},
};

