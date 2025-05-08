import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/index";

const meta = {
  title: "Components/Slider/Slider/All",
  component: Slider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    min: "0",
    max: "10",
    stepSize: "0.1",
    labelStepSize: "1",
    defaultValue: "4",
    label: "Slider",
    disabled: "false",
    onChange: "(value)",
  },
};

