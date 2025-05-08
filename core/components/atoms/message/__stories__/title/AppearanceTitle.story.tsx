import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { message } from "@/index";

const meta = {
  title: "Components/message/AppearanceTitle",
  component: message,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppearanceTitle: Story = {
  args: {
    children: "This is a message component"
  }
};
