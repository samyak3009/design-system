import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab, EmptyState } from "@/index";

const meta = {
  title: "Components/Tabs/Disabled With Activated",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DisabledWithActivated: Story = {
  args: {
    onTabChangeHandler: "(tabIndex)",
  },
};

