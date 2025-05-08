import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "@/index";

const meta = {
  title: "Components/Dropdown (Deprecated)/Dropdown With Icon",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownWithIcon: Story = {
  args: {
    options: "[",
  },
};

