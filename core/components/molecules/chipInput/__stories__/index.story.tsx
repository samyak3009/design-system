import type { Meta, StoryObj } from "@storybook/react";
import { ChipInput } from "@/index";

const meta = {
  title: "Components/Input/ChipInput/All",
  component: ChipInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChipInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    allowDuplicates: "false",
    placeholder: "Add",
    disabled: "false",
  },
};

