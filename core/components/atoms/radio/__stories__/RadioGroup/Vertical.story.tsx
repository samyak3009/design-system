import type { Meta, StoryObj } from "@storybook/react";
import { ChoiceList, Radio } from "@/index";

const meta = {
  title: "Components/Radio/RadioGroup/Vertical",
  component: ChoiceList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChoiceList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {},
};

