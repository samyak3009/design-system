import type { Meta, StoryObj } from "@storybook/react";
import { Card, Table } from "@/index";

const meta = {
  title: "Components/Table/Sizes/Standard Table",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardTable: Story = {
  args: {
    data: [],
    schema: "[",
    className: "overflow-hidden",
  },
};

