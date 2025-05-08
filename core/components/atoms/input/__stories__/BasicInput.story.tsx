import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/index";

const meta = {
  title: "Components/Input/Input/Basic Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicInput: Story = {
  args: {
    onChange: "React.useCallback((e)",
    onClear: "React.useCallback(()",
  },
};

