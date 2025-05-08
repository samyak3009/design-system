import type { Meta, StoryObj } from "@storybook/react";
import { Card, Table, CardSubdued, Text, Column, Row, Button } from "@/index";

const meta = {
  title: "Components/Table/Nesting/With Nested Cards",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithNestedCards: Story = {
  args: {
    data: [],
    schema: "[",
  },
};

