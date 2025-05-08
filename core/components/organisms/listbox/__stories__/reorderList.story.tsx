import type { Meta, StoryObj } from "@storybook/react";
import { Listbox, Card, CardFooter, Button, Text, Checkbox, Heading, Divider } from "@/index";

const meta = {
  title: "Components/Listbox/Reorder List",
  component: Listbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReorderList: Story = {
  args: {
    dataList: "[",
  },
};

