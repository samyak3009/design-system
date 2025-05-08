import type { Meta, StoryObj } from "@storybook/react";
import { Combobox, Label } from "@/index";

const meta = {
  title: "Components/Combobox/MultiSelect/Pre Filled Values",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PreFilledValues: Story = {
  args: {
    medicineList: "[",
    onSearchHandler: "(value)",
    newList: "medicineList.filter((medicine)",
    onChangeHandler: "(selectedOption)",
    isElementPresent: "(list,",
  },
};

