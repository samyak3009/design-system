import type { Meta, StoryObj } from "@storybook/react";
import { Card, Table } from "@/index";

const meta = {
  title: "Components/Table/Nesting/With Nested Rows",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithNestedRows: Story = {
  args: {
    schema: "[",
    nestedRowRenderer: "(props)",
    nestedRowSchema: "[",
  },
};

