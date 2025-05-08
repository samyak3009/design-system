import type { Meta, StoryObj } from "@storybook/react";
import { ChipGroup } from "@/index";

const meta = {
  title: "Components/Chip/ChipGroup/Input Chips",
  component: ChipGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChipGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputChips: Story = {
  args: {
    list: "[",
  },
};

