import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@/index";

const meta = {
  title: "Components/Select/Multiselect/PreFilledValue",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PreFilledValue: Story = {
  args: {
    medicineList: "[",
    onSelectHandler: "(selectedOption)",
    setLableHandler: "(count)",
  },
};

