import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "@/index";

const meta = {
  title: "Components/Dropdown (Deprecated)/Dropdown With Action Buttons",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownWithActionButtons: Story = {
  args: {
    options: "[",
  },
};

