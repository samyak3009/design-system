import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '@/index';

const meta = {
  title: 'Components/Progress Indicators/ProgressBar/Fifty Percent',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

