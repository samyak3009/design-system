import type { Meta, StoryObj } from "@storybook/react";
import { MetaList } from "@/index";

const meta = {
  title: "Components/MetaList/All",
  component: MetaList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MetaList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    list: "[",
  },
};

