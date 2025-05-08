import type { Meta, StoryObj } from '@storybook/react';
import { Textarea, Label } from '@/index';

const meta = {
  title: 'Components/Input/Textarea/Variants/Error',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

