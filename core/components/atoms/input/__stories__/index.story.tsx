import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/index";

const meta = {
  title: "Components/Input/Input/All",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    inputType: "url",
    placeholder: "Placeholder",
    info: "sample",
    min: "1",
    max: "30",
    minLength: "1",
    maxLength: "30",
  },
};

