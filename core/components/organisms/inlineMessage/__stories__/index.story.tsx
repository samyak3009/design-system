import type { Meta, StoryObj } from "@storybook/react";
import { InlineMessage } from "@/index";

const meta = {
  title: "Components/InlineMessage/All",
  component: InlineMessage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InlineMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {},
};

