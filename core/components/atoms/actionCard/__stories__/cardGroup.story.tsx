import type { Meta, StoryObj } from "@storybook/react";
import { ActionCard, Icon, Text } from "@/index";

const meta = {
  title: "Components/Interactive Card/Action Card/CardGroup",
  component: ActionCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ActionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardGroup: Story = {
  args: {
    cardList: "[",
    className: "d-flex",
  },
};

