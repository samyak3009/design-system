import type { Meta, StoryObj } from "@storybook/react";
import { TimePicker, Label, Row } from "@/index";

const meta = {
  title: "Components/TimePicker/TimePickerWithSearch/With Search",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSearch: Story = {
  args: {
    onChangeHandler: "(props)",
  },
};

