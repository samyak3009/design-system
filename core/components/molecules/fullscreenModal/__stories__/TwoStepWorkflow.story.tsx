import type { Meta, StoryObj } from "@storybook/react";
import { Button, Text, Card, FullscreenModal, Input, Label } from "@/index";

const meta = {
  title: "Components/Modal/FullscreenModal/Two Steps Workflow",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoStepsWorkflow: Story = {
  args: {
    onClose: "()",
    openModal: "()",
    headerOptions: "()",
  },
};

