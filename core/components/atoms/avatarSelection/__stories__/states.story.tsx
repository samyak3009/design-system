import type { Meta, StoryObj } from "@storybook/react";
import { AvatarSelection, Avatar, Input, Text } from "@/index";

const meta = {
  title: "Components/Avatar/AvatarSelection/States",
  component: AvatarSelection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AvatarSelection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const States: Story = {
  args: {
    list: "[",
    disabledList: "[",
    onSelectHandler: "(props)",
    searchComparator: "(searchValue,",
  },
};

