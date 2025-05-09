import React from 'react';
import { Button } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Button/Sizes',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button has different sizes',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonSizes: Story = {
  render: () => {
    const sizes = ['tiny', 'regular', 'large'];

    return (
      <div className="d-flex justify-content-between w-50">
        {sizes.map((buttonSize, ind) => {
          return (
            <Button
              key={ind}
              size={buttonSize as any}
              appearance={'primary'}
              aria-label={`${buttonSize}`}
            >
              {buttonSize.charAt(0).toUpperCase() + buttonSize.slice(1)}
            </Button>
          );
        })}
      </div>
    );
  },
};
