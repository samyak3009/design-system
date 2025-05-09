import React from 'react';
import { Button } from '@/index';

export default {
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

export const ButtonSizes = () => {
  const sizes = ['tiny', 'regular', 'large'] as const;

  return (
    <div className="d-flex justify-content-between w-50">
      {sizes.map((buttonSize, ind) => {
        return (
          <Button
            key={ind}
            size={buttonSize}
            appearance={'primary'}
            aria-label={`${buttonSize}`}
          >
            {buttonSize.charAt(0).toUpperCase() + buttonSize.slice(1)}
          </Button>
        );
      })}
    </div>
  );
};
