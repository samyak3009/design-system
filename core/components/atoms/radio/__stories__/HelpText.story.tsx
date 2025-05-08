import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "@/index";

const meta = {
  title: "Components/Radio/With Help Text",
  component: Radio,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHelpText: Story = {
  args: {},
};

