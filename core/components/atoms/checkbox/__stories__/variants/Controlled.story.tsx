import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/index";

const meta = {
  title: "Components/Checkbox/Variants/Controlled Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ControlledCheckbox: Story = {
  args: {
    handleParentChange: "(event)",
    updatedChecked: "event.target.checked",
  },
};

