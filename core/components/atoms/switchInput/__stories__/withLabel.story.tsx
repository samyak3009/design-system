import type { Meta, StoryObj } from "@storybook/react";
import { Label, Switch } from "@/index";

const meta = {
  title: "Components/Switch/With Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  args: {
    onChangeHandler: "(_event,",
  },
};

