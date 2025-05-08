import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Sidesheet } from '@/index';

const meta = {
  title: 'Components/sidesheet/scrolling',
  component: Sidesheet,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Sidesheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const scrolling: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Sidesheet>
          scrolling Example
        </Sidesheet>
      </div>
    );
  }
};
