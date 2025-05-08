import type { Meta, StoryObj } from "@storybook/react";
import { Heading, Sidesheet, Button, Label, Text } from "@/index";

const meta = {
  title: "Components/Sidesheet/Two Steps",
  component: Heading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoSteps: Story = {
  args: {},
};

