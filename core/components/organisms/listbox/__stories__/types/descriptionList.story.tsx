import type { Meta, StoryObj } from "@storybook/react";
import { Listbox, Card, Heading, CardHeader, Input, CardBody, Text, Divider, Avatar, Button } from "@/index";

const meta = {
  title: "Components/Listbox/Type/Description List",
  component: Listbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DescriptionList: Story = {
  args: {
    dataList: "[",
  },
};

