import type { Meta, StoryObj } from '@storybook/react';
import { Text, Button, Popover } from '@/index';

const meta = {
  title: 'Components/Popover/Popover With Action',
  component: Text,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

