import type { Meta, StoryObj } from "@storybook/react";
import { Select, Text, Tooltip } from "@/index";

const meta = {
  title: "Components/Select/Overflow Behavior",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OverflowBehavior: Story = {
  args: {
    medicineList: "[",
    onSelectHandler: "(selectedOption)",
    SelectItem: "({",
    elementRef: "React.useRef(null)",
    open: "showTooltip",
  },
};

