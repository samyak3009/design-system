import React from 'react';
import { Icon, Text } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon/Variants/Type',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Icon has different types',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Type: Story = {
  render: () => {
    const types = ['outlined', 'rounded'];
    const name = 'alarm';
    
    return (
      <div className="d-flex">
        {types.map((iconShape, ind) => {
          return (
            <div key={ind} className="mr-10">
              <Icon type={iconShape as any} size={48} name={name} />
              <br />
              <Text weight="strong">{iconShape.charAt(0).toUpperCase() + iconShape.slice(1)}</Text>
            </div>
          );
        })}
      </div>
    );
  },
};
