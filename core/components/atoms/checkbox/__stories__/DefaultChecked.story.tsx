import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/index';

const meta = {
  title: 'Components/Checkbox/Default Checked',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

