import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Heading, Select, Button, Input, Tab } from "@/index";

const meta = {
  title: "Components/Tabs/Tabs With Count",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsWithCount: Story = {
  args: {
    options: "[",
    onTabChangeHandler: "(tabIndex)",
  },
};

