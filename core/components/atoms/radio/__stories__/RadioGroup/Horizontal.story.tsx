import type { Meta, StoryObj } from "@storybook/react";
import { ChoiceList, Radio } from "@/index";

const meta = {
  title: "Components/Radio/RadioGroup/Horizontal",
  component: ChoiceList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChoiceList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {},
};

