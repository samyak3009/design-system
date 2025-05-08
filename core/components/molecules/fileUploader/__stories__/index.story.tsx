import type { Meta, StoryObj } from '@storybook/react';
import { FileUploader } from '@/index';

const meta = {
  title: 'Components/File Uploader/FileUploader (Deprecated)/All',
  component: FileUploader,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FileUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

