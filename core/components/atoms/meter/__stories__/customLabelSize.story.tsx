import type { Meta, StoryObj } from "@storybook/react";
import { Meter } from "@/index";

const meta = {
  title: "Components/Meter/Variants/Custom Label Size",
  component: Meter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Meter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomLabelSize: Story = {
  args: {},
};

