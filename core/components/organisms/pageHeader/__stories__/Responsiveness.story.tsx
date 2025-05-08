import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from '@/index';

const meta = {
  title: 'Components/pageHeader/Responsiveness',
  component: PageHeader,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Responsiveness: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <PageHeader>
          Responsiveness Example
        </PageHeader>
      </div>
    );
  }
};
