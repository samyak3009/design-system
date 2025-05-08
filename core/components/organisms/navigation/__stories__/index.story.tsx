import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from '@/index';

const meta = {
  title: 'Components/Navigation (Deprecated)/All',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

