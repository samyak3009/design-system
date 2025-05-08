import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalNav } from '@/index';

const meta = {
  title: 'Components/horizontalNav/variants/default',
  component: HorizontalNav,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HorizontalNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultNav: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <HorizontalNav
          menus={[
            { label: 'Home', icon: 'home', active: true },
            { label: 'Profile', icon: 'profile' },
            { label: 'Settings', icon: 'settings' }
          ]}
        />
      </div>
    );
  }
};
