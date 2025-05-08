import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { verticalNav } from "@/index";

const meta = {
  title: "Components/verticalNav/CustomTrigger",
  component: verticalNav,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof verticalNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomTrigger: Story = {
  args: {
    children: "This is a verticalNav component"
  }
};
