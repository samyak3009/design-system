import type { Meta, StoryObj } from "@storybook/react";
import { Dropzone, LinkButton } from "@/index";

const meta = {
  title: "Components/File Uploader/Dropzone/Variants/Format",
  component: Dropzone,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Format: Story = {
  args: {
    onDrop: "(_event,",
  },
};

