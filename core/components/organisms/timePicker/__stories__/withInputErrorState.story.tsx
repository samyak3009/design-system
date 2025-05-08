import type { Meta, StoryObj } from "@storybook/react";
import { TimePicker, HelpText } from "@/index";

const meta = {
  title: "Components/Timepicker/TimePickerWithInput/With Input Error State",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInputErrorState: Story = {
  args: {
    inputFormat: "hh:mm",
    outputFormat: "hh:mm",
    onTimeChange: "(val)",
  },
};

