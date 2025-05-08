import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/index";

const meta = {
  title: "Components/Checkbox/With Help Text",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHelpText: Story = {
  args: {},
};

