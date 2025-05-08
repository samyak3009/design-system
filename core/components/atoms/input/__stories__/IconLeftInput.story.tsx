import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/index';

const meta = {
  title: 'Components/Input/Input/Icon Left Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

