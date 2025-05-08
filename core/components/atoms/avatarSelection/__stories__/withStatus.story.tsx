import type { Meta, StoryObj } from "@storybook/react";
import { AvatarSelection, Avatar, Input, Tooltip, Icon } from "@/index";

const meta = {
  title: "Components/Avatar/AvatarSelection/With Status",
  component: AvatarSelection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AvatarSelection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithStatus: Story = {
  args: {
    list: "[",
    onSelectHandler: "(props)",
    searchComparator: "(searchValue,",
  },
};

