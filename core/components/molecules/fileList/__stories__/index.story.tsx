import type { Meta, StoryObj } from "@storybook/react";
import { FileList, Button } from "@/index";

const meta = {
  title: "Components/File Uploader/FileList/All",
  component: FileList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FileList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    onClick: "(file)",
  },
};

