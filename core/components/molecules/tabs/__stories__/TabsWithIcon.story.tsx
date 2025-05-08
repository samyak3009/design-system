import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Heading, Link, Tab } from "@/index";

const meta = {
  title: "Components/Tabs/Tabs With Icon",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsWithIcon: Story = {
  args: {
    onTabChangeHandler: "(tabIndex)",
  },
};

