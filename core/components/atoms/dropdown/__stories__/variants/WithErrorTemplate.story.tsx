import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, Icon, Text } from "@/index";

const meta = {
  title: "Components/Dropdown (Deprecated)/Variants/With Error Template",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithErrorTemplate: Story = {
  args: {
    fetchOptions: "(searchTerm)",
  },
};

