import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '@/index';

const meta = {
  title: 'Components/breadcrumbs/moreThan4Levels',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const moreThan4Levels: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Breadcrumbs>
          moreThan4Levels Example
        </Breadcrumbs>
      </div>
    );
  }
};
