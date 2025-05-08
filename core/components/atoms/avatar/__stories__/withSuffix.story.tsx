import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/index";

const meta = {
  title: "Components/Avatar/Avatar/With Suffix",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSuffix: Story = {
  args: {
    withTooltip: "true",
    firstName: "John",
    lastName: "Doe",
    tooltipSuffix: "(Deactivated)",
    disabled: "true",
    options: "{",
  },
};

