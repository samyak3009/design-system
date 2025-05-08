import type { Meta, StoryObj } from '@storybook/react';
import { Button, Popover } from '@/index';

const meta = {
  title: 'Components/Popover/Light Popover',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

