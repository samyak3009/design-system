import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Label } from '@/index';

const meta = {
  title: 'Components/Checkbox/Overflow Behavior',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

