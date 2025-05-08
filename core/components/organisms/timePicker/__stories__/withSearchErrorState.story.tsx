import type { Meta, StoryObj } from "@storybook/react";
import { TimePicker, Label, HelpText } from "@/index";

const meta = {
  title: "Components/TimePicker/TimePickerWithSearch/With Search Error State",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSearchErrorState: Story = {
  args: {
    onChangeHandler: "(props)",
  },
};

