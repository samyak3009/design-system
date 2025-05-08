import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "@/index";

const meta = {
  title: "Components/Dropdown (Deprecated)/Dropdown Options More Than 50",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownOptionsMoreThan50: Story = {
  args: {
    getSearchedOptions: "(opts,",
    result: "opts.filter((option)",
  },
};

