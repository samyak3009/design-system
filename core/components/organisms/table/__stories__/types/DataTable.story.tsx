import type { Meta, StoryObj } from "@storybook/react";
import { Card, Table } from "@/index";

const meta = {
  title: "Components/Table/Types/Data Table",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DataTable: Story = {
  args: {
    data: [],
    schema: "[",
  },
};

