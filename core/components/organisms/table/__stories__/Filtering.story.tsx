import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@/index";

const meta = {
  title: "Components/Table/Filtering",
  component: Table,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filtering: Story = {
  args: {},
};

