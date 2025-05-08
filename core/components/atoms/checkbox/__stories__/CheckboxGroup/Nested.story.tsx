import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/index";

const meta = {
  title: "Components/Checkbox/Checkbox Group/Nested",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Nested: Story = {
  args: {
    parentObj: "{",
    labels: "[",
    childArray: "[true,",
    handleParentChange: "(event)",
    updatedArray: "[...childArray].fill(event.target.checked)",
    handleChildChange: "(event,",
    updateCheck: "[...checked]",
    totalCount: "labels.length",
    countT: "updateCheck.filter(Boolean).length",
    status: "countT",
    obj: "countT",
  },
};

