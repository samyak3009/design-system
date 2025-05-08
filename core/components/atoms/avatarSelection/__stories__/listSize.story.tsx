import type { Meta, StoryObj } from "@storybook/react";
import { AvatarSelection, Checkbox, Label, Input, Avatar, Text } from "@/index";

const meta = {
  title: "Components/Avatar/AvatarSelection/List Item Size",
  component: AvatarSelection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AvatarSelection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListItemSize: Story = {
  args: {
    list: "[",
    listRef: "React.createRef()",
    listSize: "[",
    updatedList: "avatarList.map((avatar)",
  },
};

