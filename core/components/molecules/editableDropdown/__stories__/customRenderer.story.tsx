import type { Meta, StoryObj } from "@storybook/react";
import { EditableDropdown, Label, StatusHint, Icon } from "@/index";

const meta = {
  title: "Components/Inline Editable Fields/EditableDropdown/Custom Render",
  component: EditableDropdown,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof EditableDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomRender: Story = {
  args: {
    onChange: "(selectedValues)",
  },
};

