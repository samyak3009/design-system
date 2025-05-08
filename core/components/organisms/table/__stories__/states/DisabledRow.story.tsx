import type { Meta, StoryObj } from "@storybook/react";
import { Card, Table } from "@/index";

const meta = {
  title: "Components/Table/States/Disabled Row",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DisabledRow: Story = {
  args: {
    data: [],
    schema: "[",
  },
};

