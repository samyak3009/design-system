import type { Meta, StoryObj } from '@storybook/react';
import { Spinner, Text } from '@/index';

const meta = {
  title: 'Components/Progress Indicators/Spinner/Inline Loader',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

