import type { Meta, StoryObj } from "@storybook/react";
import { AvatarSelection, Checkbox, Input, Tooltip } from "@/index";

const meta = {
  title: "Components/Avatar/AvatarSelection/Custom",
  component: AvatarSelection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AvatarSelection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Custom: Story = {
  args: {
    list: "[",
    updatedList: "avatarList.map((avatar)",
  },
};

