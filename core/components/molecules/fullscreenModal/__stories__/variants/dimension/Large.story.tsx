import type { Meta, StoryObj } from "@storybook/react";
import { Button, FullscreenModal, Label, Input, Radio, Icon, Text, Card } from "@/index";

const meta = {
  title: "Components/Modal/FullscreenModal/Variants/Dimension/Large",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    onClose: "()",
    data: [],
    cardClassName: "(index)",
    classname: "d-flex",
  },
};

