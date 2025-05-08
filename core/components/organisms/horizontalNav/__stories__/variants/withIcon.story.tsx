import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalNav } from '@/index';

const meta = {
  title: 'Components/horizontalNav/variants/withIcon',
  component: HorizontalNav,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HorizontalNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withIcon: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <HorizontalNav>
          withIcon Example
        </HorizontalNav>
      </div>
    );
  }
};
