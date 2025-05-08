import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "@/index";

const meta = {
  title: "Components/Chip/Chip/All",
  component: Chip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    type: "selection",
    label: "Chip",
    icon: "assessment",
    disabled: "false",
  },
};

