import type { Meta, StoryObj } from "@storybook/react";
import { Card, Table } from "@/index";

const meta = {
  title: "Components/Table/Custom Cell Renderer/Body Cell",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BodyCell: Story = {
  args: {
    className: "vh-50",
  },
};

