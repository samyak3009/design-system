import type { Meta, StoryObj } from '@storybook/react';
import { Button, Popover, Label, Textarea, LinkButton, Input } from '@/index';

const meta = {
  title: 'Components/Popover/Popover With Input',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

