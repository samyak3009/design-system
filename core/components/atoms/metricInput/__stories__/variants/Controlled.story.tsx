import type { Meta, StoryObj } from "@storybook/react";
import { MetricInput, Row, Column } from "@/index";

const meta = {
  title: "Components/Input/MetricInput/Variants/Controlled Metric Input",
  component: MetricInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MetricInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ControlledMetricInput: Story = {
  args: {
    size: "1",
  },
};

