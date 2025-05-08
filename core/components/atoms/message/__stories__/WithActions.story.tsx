import type { Meta, StoryObj } from '@storybook/react';
import { Message, LinkButton } from '@/index';

const meta = {
  title: 'Components/Message/Message With Actions',
  component: Message,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

