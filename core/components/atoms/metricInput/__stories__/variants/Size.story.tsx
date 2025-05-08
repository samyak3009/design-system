import type { Meta, StoryObj } from '@storybook/react';
import { MetricInput, Text, Row, Column } from '@/index';

const meta = {
  title: 'Components/Input/MetricInput/Variants/Size',
  component: MetricInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MetricInput>;

export default meta;
type Story = StoryObj<typeof meta>;

