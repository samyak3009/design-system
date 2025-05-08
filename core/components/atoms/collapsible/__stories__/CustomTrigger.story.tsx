import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { collapsible } from "@/index";

const meta = {
  title: "Components/collapsible/CustomTrigger",
  component: collapsible,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomTrigger: Story = {
  args: {
    children: "This is a collapsible component"
  }
};
