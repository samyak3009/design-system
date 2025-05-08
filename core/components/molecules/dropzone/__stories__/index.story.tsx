import type { Meta, StoryObj } from "@storybook/react";
import { Dropzone, FileList, Button, LinkButton } from "@/index";

const meta = {
  title: "Components/File Uploader/Dropzone/All",
  component: Dropzone,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    getSize: "(size)",
    onDelete: "(id)",
    updatedFiles: "files.filter((file)",
    onDropHandler: "(_event,",
    acceptedFileDetailList: "acceptedFiles.map((file,",
    rejectedFilesDetailList: "rejectedFiles.map((rejectedFile,",
    errorMessageArray: "errors.map((error)",
  },
};

