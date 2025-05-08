import type { Meta, StoryObj } from "@storybook/react";
import { DateRangePicker, InputMask, Card } from "@/index";

const meta = {
  title: "Components/DatePicker/DateRangePicker/All",
  component: DateRangePicker,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    withInput: "false",
    open: "false",
    monthsInView: "withInput",
    inputFormat: "dd/mm/yyyy",
    outputFormat: "mm/dd/yyyy",
    startDate: "new",
    endDate: "new",
    view: "month",
    rangeLimit: "0",
    firstDayOfWeek: "thursday",
    disabledBefore: "new",
    disabledAfter: "new",
    jumpView: "true",
    yearNav: "-1",
    monthNav: "-1",
    attr: "{}",
  },
};

