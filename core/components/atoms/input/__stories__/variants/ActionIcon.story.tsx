import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/index";

const meta = {
  title: "Components/Input/Input/Variants/Action Icon",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActionIcon: Story = {
  args: {
    customIcon: (
      <>
        <Input.ActionButton icon="search" onClick={() => {}} />
      </>
    )},
};

