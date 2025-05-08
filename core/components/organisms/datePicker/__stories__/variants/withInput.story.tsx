import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker, InputMask } from "@/index";

const meta = {
  title: "Components/DatePicker/DatePicker/Variants/With Input",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  args: {
    dateValue: "undefined",
    inputFormat: "mm/dd/yyyy",
    outputFormat: "yyyy/mm/dd",
    view: "date",
    firstDayOfWeek: "saturday",
    disabledBefore: "new",
    disabledAfter: "new",
    jumpView: "true",
    yearNav: "-1",
    monthNav: "-1",
    closeOnSelect: "true",
    attr: "{}",
    className: "w-25",
  },
};

