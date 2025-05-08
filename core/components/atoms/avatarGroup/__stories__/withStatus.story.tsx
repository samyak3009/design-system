import type { Meta, StoryObj } from "@storybook/react";
import { AvatarGroup, Tooltip, Icon, Avatar } from "@/index";

const meta = {
  title: "Components/Avatar/AvatarGroup/With Status",
  component: AvatarGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithStatus: Story = {
  args: {
    statusList: "[",
  },
};

