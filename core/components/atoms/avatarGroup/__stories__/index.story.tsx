import type { Meta, StoryObj } from "@storybook/react";
import { AvatarGroup } from "@/index";

const meta = {
  title: "Components/Avatar/AvatarGroup/All",
  component: AvatarGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    position: "bottom",
    max: "2",
    options: "{",
  },
};

