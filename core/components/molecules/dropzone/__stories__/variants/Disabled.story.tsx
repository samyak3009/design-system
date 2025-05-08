import type { Meta, StoryObj } from "@storybook/react";
import { Dropzone, Text } from "@/index";

const meta = {
  title: "Components/File Uploader/Dropzone/Variants/Disabled",
  component: Dropzone,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    onDrop: "(_event,",
  },
};

