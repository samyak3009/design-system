import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab, Text, Pills } from "@/index";

const meta = {
  title: "Components/Tabs/Custom Labels",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomLabels: Story = {
  args: {
    onTabChangeHandler: "(tabIndex)",
  },
};

