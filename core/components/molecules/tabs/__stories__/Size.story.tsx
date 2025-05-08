import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab, Text } from "@/index";

const meta = {
  title: "Components/Tabs/Size",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Size: Story = {
  args: {
    onTabChangeHandler: "(tabIndex)",
  },
};

