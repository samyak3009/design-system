import type { Meta, StoryObj } from '@storybook/react';
import { Message } from '@/index';

const meta = {
  title: 'Components/Message/Appearance/Alert',
  component: Message,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

