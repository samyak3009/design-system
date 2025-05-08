import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Heading, Select, Tab } from "@/index";

const meta = {
  title: "Components/Tabs/Basic Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTabs: Story = {
  args: {
    options: "[",
    onTabChangeHandler: "(tabIndex)",
  },
};

