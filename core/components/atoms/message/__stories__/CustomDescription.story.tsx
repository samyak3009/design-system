import type { Meta, StoryObj } from '@storybook/react';
import { Message, Text, LinkButton } from '@/index';

const meta = {
  title: 'Components/Message/Custom Description',
  component: Message,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

