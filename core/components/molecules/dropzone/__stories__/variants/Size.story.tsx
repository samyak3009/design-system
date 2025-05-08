import type { Meta, StoryObj } from "@storybook/react";
import { Dropzone, Text, LinkButton } from "@/index";

const meta = {
  title: "Components/File Uploader/Dropzone/Variants/Size",
  component: Dropzone,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Size: Story = {
  args: {
    onDrop: "(_event,",
  },
};

