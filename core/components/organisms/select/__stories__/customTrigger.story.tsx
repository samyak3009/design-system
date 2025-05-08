import type { Meta, StoryObj } from "@storybook/react";
import { Select, Button, AIIconButton, Text } from "@/index";

const meta = {
  title: "Components/Select/Custom Trigger",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomTrigger: Story = {
  args: {
    statusOptions: "[",
    recordOptions: "[",
    overviewOptions: "[",
    onStatusSelect: "(selectedOption)",
    onRecordSelect: "(selectedOption)",
    onOverviewSelect: "(selectedOption)",
    onToggleStatusSelect: "(isOpen)",
    onToggleRecordSelect: "(isOpen)",
    onToggleOverviewSelect: "(isOpen)",
    getStatusLabel: "()",
  },
};

