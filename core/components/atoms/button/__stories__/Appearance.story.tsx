import React from 'react';
import { Button } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Button/Appearance/All',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button has different appearances',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const All: Story = {
  render: () => {
    const appearances = ['basic', 'primary', 'alert', 'transparent'];

    return (
      <div className="d-flex w-75 justify-content-between">
        {appearances.map((appear, ind) => {
          return (
            <Button key={ind} appearance={appear} aria-label={`${appear}`}>
              {appear.charAt(0).toUpperCase() + appear.slice(1)}
            </Button>
          );
        })}
      </div>
    );
  },
};
