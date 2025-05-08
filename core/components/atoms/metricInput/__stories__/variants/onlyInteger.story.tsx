import type { Meta, StoryObj } from "@storybook/react";
import { MetricInput, Label, Row, Column } from "@/index";

const meta = {
  title: "Components/Input/MetricInput/Variants/Only Integer",
  component: MetricInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MetricInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnlyInteger: Story = {
  args: {
    onKeyDownHandler: "(e)",
    isInteger: "(val)",
  },
};

