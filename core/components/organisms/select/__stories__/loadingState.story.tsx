import type { Meta, StoryObj } from "@storybook/react";
import { Select, Spinner } from "@/index";

const meta = {
  title: "Components/Select/LoadingState",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingState: Story = {
  args: {
    medicineList: "[",
    fetchOptions: "(searchTerm)",
    searchedOptions: "searchTerm.trim()",
  },
};

