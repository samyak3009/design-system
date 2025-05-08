import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/index";

const meta = {
  title: "Components/Icon/All",
  component: Icon,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {},
};

