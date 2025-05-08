import type { Meta, StoryObj } from "@storybook/react";
import { AvatarSelection, Avatar, Input } from "@/index";

const meta = {
  title: "Components/Avatar/AvatarSelection/All",
  component: AvatarSelection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AvatarSelection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    list: "[",
    onSelectHandler: "(props)",
    searchComparator: "(searchValue,",
  },
};

