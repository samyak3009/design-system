import type { Meta, StoryObj } from "@storybook/react";
import { ChoiceList, Radio } from "@/index";

const meta = {
  title: "Components/Radio/RadioGroup/Controlled",
  component: ChoiceList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChoiceList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  args: {
    label: "Days",
    alignmentHorizontal: "horizontal",
    days: "[",
  },
};

