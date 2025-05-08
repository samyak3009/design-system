import type { Meta, StoryObj } from "@storybook/react";
import { Combobox, Label, Tooltip, Text } from "@/index";

const meta = {
  title: "Components/Combobox/Overflow Behavior",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OverflowBehavior: Story = {
  args: {
    barrierList: "[",
    onChangeHandler: "(inputValue)",
    updatedList: "barrierList.filter((medicine)",
    ComboboxItem: "({",
    elementRef: "React.useRef(null)",
    open: "showTooltip",
  },
};

