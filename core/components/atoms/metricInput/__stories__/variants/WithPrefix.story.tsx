import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MetricInput } from '@/index';

const meta = {
  title: 'Components/metricInput/variants/WithPrefix',
  component: MetricInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MetricInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPrefix: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <MetricInput>
          WithPrefix Example
        </MetricInput>
      </div>
    );
  }
};
