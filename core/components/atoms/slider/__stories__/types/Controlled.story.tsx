import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/index";

const meta = {
  title: "Components/Slider/Slider/Types/Controlled Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ControlledSlider: Story = {
  args: {
    onChange: "(newValue)",
  },
};

