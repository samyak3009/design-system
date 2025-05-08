import type { Meta, StoryObj } from "@storybook/react";
import { MetaList } from "@/index";

const meta = {
  title: "Components/MetaList/With Separator",
  component: MetaList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MetaList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSeparator: Story = {
  args: {
    seperator: "true",
    list: "[",
  },
};

