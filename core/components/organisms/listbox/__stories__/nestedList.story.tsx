import type { Meta, StoryObj } from "@storybook/react";
import { Listbox, Card, Text, Icon, MetaList, StatusHint, Switch, Menu } from "@/index";

const meta = {
  title: "Components/Listbox/Nested List",
  component: Listbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NestedList: Story = {
  args: {
    dataList: "[",
    onClickHandler: "(key)",
    shadow: "none",
  },
};

