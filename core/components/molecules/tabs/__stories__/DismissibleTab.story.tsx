import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab } from "@/index";

const meta = {
  title: "Components/Tabs/Dismissible Tab ",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DismissibleTab: Story = {
  args: {
    onTabChangeHandler: "(tabIndex)",
  },
};

