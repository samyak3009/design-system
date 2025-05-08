import type { Meta, StoryObj } from "@storybook/react";
import { Select, Text } from "@/index";

const meta = {
  title: "Components/Select/Multiselect/WithSections",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSections: Story = {
  args: {
    medicineList: "[",
    groupedMedicine: "medicineList.reduce((acc,",
    groupKey: "item.group",
  },
};

