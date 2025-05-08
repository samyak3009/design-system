import type { Meta, StoryObj } from "@storybook/react";
import { TimePicker } from "@/index";

const meta = {
  title: "Components/Timepicker/TimePickerWithInput/With Input",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  args: {
    inputFormat: "hh:mm",
    outputFormat: "hh:mm",
    onTimeChange: "(val)",
  },
};

