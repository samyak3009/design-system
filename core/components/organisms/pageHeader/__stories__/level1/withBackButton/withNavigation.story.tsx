import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from '@/index';

const meta = {
  title: 'Components/pageHeader/level1/withBackButton/withNavigation',
  component: PageHeader,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withNavigation: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <PageHeader>
          withNavigation Example
        </PageHeader>
      </div>
    );
  }
};
