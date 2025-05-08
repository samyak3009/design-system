import type { Meta, StoryObj } from "@storybook/react";
import { AvatarGroup, Avatar } from "@/index";

const meta = {
  title: "Components/Avatar/AvatarGroup/With Image",
  component: AvatarGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    list: "[",
  },
};

