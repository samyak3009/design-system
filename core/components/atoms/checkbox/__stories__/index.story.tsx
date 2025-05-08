import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/index";

const meta = {
  title: "Components/Checkbox/All",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    size: "regular",
    label: "Checkbox",
    disabled: "false",
    onChangeHandler: "(event)",
  },
};

