import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Select, Input, Tab } from "@/index";

const meta = {
  title: "Components/Tabs/Inline Content",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InlineContent: Story = {
  args: {
    options: "[",
    onTabChangeHandler: "(tabIndex)",
  },
};

