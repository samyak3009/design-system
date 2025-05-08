import type { Meta, StoryObj } from "@storybook/react";
import { Card, Table, Button } from "@/index";

const meta = {
  title: "Components/Table/Sizes/Compressed Table",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompressedTable: Story = {
  args: {
    data: [],
    schema: "[",
  },
};

