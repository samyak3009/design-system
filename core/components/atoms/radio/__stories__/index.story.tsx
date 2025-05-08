import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "@/index";

const meta = {
  title: "Components/Radio/All",
  component: Radio,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    label: "Radio",
    name: "gender",
    onChangeHandler: "(event)",
  },
};

