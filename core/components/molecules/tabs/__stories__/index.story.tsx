import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab } from "@/index";

const meta = {
  title: "Components/Tabs/All",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    onTabChangeHandler: "(tabIndex)",
  },
};

