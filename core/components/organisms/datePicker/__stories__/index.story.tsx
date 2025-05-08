import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker, Card, InputMask } from "@/index";

const meta = {
  title: "Components/DatePicker/DatePicker/All",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    withInput: "false",
    open: "false",
    closeOnSelect: "true",
    inputFormat: "dd-mm-yyyy",
    outputFormat: "yyyy-mm-dd",
    dateValue: "undefined",
    view: "month",
    firstDayOfWeek: "sunday",
    disabledBefore: "new",
    disabledAfter: "new",
    jumpView: "true",
    yearNav: "-1",
    monthNav: "-1",
    attr: "{}",
  },
};

