import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VerticalNav } from '@/index';

const meta = {
  title: 'Components/verticalNav/RoundEdgedVerticalNav',
  component: VerticalNav,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof VerticalNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RoundEdgedVerticalNav: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <VerticalNav>
          RoundEdgedVerticalNav Example
        </VerticalNav>
      </div>
    );
  }
};
