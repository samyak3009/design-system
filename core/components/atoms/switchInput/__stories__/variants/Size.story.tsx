import type { Meta, StoryObj } from "@storybook/react";
import { Switch, Text } from "@/index";

const meta = {
  title: "Components/Switch/Variants/Size",
  component: Switch,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Size: Story = {
  args: {
    sizes: "[",
  },
};

