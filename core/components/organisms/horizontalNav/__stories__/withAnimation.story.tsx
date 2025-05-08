import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalNav } from '@/index';

const meta = {
  title: 'Components/horizontalNav/withAnimation',
  component: HorizontalNav,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HorizontalNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withAnimation: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <HorizontalNav>
          withAnimation Example
        </HorizontalNav>
      </div>
    );
  }
};
