import type { Meta, StoryObj } from '@storybook/react';
import { StatusHint } from '@/index';

const meta = {
  title: 'Components/StatusHint/Variants/Success',
  component: StatusHint,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof StatusHint>;

export default meta;
type Story = StoryObj<typeof meta>;

