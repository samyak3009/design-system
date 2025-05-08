import type { Meta, StoryObj } from "@storybook/react";
import { ChipInput } from "@/index";

const meta = {
  title: "Components/Input/ChipInput/Variants/Controlled",
  component: ChipInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChipInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  args: {},
};

