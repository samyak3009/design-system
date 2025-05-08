import type { Meta, StoryObj } from "@storybook/react";
import { Select, Text } from "@/index";

const meta = {
  title: "Components/Select/Multiselect/SelectedItem",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectedItem: Story = {
  args: {
    medicineList: "[",
    selectRef: "React.useRef(null)",
    handleSelect: "(selectedOption)",
    onClearHandler: "()",
    groupedMedicine: "medicineList.reduce((acc,",
    groupKey: "selectedOptions.find((opt)",
  },
};

