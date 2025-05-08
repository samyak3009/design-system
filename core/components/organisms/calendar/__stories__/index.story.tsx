import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@/index";

const meta = {
  title: "Components/Calendar/All",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    monthsInView: "1",
    dateValue: "new",
    view: "date",
    rangePicker: "false",
    rangeLimit: "0",
    firstDayOfWeek: "saturday",
    disabledBefore: "new",
    disabledAfter: "new",
    jumpView: "true",
    yearNav: "-1",
    monthNav: "-1",
    attr: "{}",
    isValid: "(validators,",
    iterator: "Array.isArray(validators)",
  },
};

