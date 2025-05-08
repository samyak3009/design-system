import type { Meta, StoryObj } from "@storybook/react";
import { Listbox, Card, Heading, CardHeader, Input, Select, CardBody, Tabs, Tab, Text, Icon, CardFooter, StatusHint } from "@/index";

const meta = {
  title: "Components/Listbox/Type/Option List",
  component: Listbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OptionList: Story = {
  args: {
    dataList: "[",
    transitionOptions: "[",
  },
};

