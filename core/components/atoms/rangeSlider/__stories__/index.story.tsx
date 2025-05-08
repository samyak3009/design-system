import type { Meta, StoryObj } from "@storybook/react";
import { RangeSlider } from "@/index";

const meta = {
  title: "Components/Slider/RangeSlider/All",
  component: RangeSlider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    min: "0",
    max: "10",
    stepSize: "0.1",
    labelStepSize: "1",
    label: "Slider",
    disabled: "false",
    onChange: "(value)",
  },
};

