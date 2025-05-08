import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/index";

const meta = {
  title: "Components/Slider/Slider/Disabled",
  component: Slider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {},
};

