import type { Meta, StoryObj } from '@storybook/react';
import { InlineMessage } from '@/index';

const meta = {
  title: 'Components/InlineMessage/Appearance/Success',
  component: InlineMessage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InlineMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

