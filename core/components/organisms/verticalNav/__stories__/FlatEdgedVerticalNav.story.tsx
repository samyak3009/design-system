import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VerticalNav } from '@/index';

const meta = {
  title: 'Components/verticalNav/FlatEdgedVerticalNav',
  component: VerticalNav,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof VerticalNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FlatEdgedVerticalNav: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <VerticalNav>
          FlatEdgedVerticalNav Example
        </VerticalNav>
      </div>
    );
  }
};
