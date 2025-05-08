import type { Meta, StoryObj } from "@storybook/react";
import { Card, Table, Menu, Avatar, Text } from "@/index";

const meta = {
  title: "Components/Table/Types/Resource Table",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResourceTable: Story = {
  args: {
    statusAppearance: "{",
    schema: "[",
  },
};

