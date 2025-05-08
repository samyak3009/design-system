import type { Meta, StoryObj } from '@storybook/react';
import { ChatMessage } from '@/index';

const meta = {
  title: 'Components/Chat/Chat Message',
  component: ChatMessage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChatMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

