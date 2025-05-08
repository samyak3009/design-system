import type { Meta, StoryObj } from '@storybook/react';
import { Pills } from '@/index';

const meta = {
  title: 'Components/Pills/Alert',
  component: Pills,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Pills>;

export default meta;
type Story = StoryObj<typeof meta>;

