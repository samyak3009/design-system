import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '@/index';

const meta = {
  title: 'Components/breadcrumbs/lessThan4Levels',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const lessThan4Levels: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Breadcrumbs>
          lessThan4Levels Example
        </Breadcrumbs>
      </div>
    );
  }
};
