import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '@/index';

const meta = {
  title: 'Components/Toast/Success Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

