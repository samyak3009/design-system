import type { Meta, StoryObj } from "@storybook/react";
import { SelectionCard, Row, Column, Icon, Text } from "@/index";

const meta = {
  title: "Components/Interactive Card/Selection Card/SingleSelect",
  component: SelectionCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SelectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleSelect: Story = {
  args: {
    list: "[",
    onClickHandler: "(e,",
  },
};

