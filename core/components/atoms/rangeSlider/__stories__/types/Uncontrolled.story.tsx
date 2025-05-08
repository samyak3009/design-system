import type { Meta, StoryObj } from "@storybook/react";
import { RangeSlider } from "@/index";

const meta = {
  title: "Components/Slider/RangeSlider/Types/Uncontrolled Slider",
  component: RangeSlider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UncontrolledSlider: Story = {
  args: {},
};

