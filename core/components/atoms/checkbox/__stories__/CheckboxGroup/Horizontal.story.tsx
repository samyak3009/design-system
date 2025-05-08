import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, ChoiceList } from "@/index";

const meta = {
  title: "Components/Checkbox/Checkbox Group/Horizontal",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    labelHorizontal: "Horizontal",
    alignmentHorizontal: "horizontal",
    days: "[",
  },
};

