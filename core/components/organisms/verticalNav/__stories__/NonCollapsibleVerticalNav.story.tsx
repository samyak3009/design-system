import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VerticalNav } from '@/index';

const meta = {
  title: 'Components/verticalNav/NonCollapsibleVerticalNav',
  component: VerticalNav,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof VerticalNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NonCollapsibleVerticalNav: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <VerticalNav>
          NonCollapsibleVerticalNav Example
        </VerticalNav>
      </div>
    );
  }
};
