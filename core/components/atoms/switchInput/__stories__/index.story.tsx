import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/index';

const meta = {
  title: 'Components/Switch/All',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

