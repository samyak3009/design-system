import type { Meta, StoryObj } from "@storybook/react";
import { EditableDropdown, Label } from "@/index";

const meta = {
  title: "Components/Inline Editable Fields/EditableDropdown/All",
  component: EditableDropdown,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof EditableDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    placeholder: "Select",
    getSearchedOptions: "(options,",
    result: "options.filter((option)",
  },
};

