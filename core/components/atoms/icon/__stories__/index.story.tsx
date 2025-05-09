import React from 'react';
import { Icon } from '@/index';

export default {
  title: 'Components/Icon/All',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Icon component for displaying material icons',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Material icon name',
    },
    size: {
      control: 'number',
      description: 'Size of the icon in pixels',
    },
    type: {
      control: 'select',
      options: ['filled', 'outlined', 'rounded', 'two-tone', 'sharp'],
      description: 'Type of material icon',
    },
    appearance: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'white',
        'subtle',
        'disabled',
        'info',
        'alert',
        'warning',
        'success',
        'primary',
      ],
      description: 'Color of the icon',
    },
  },
  args: {
    name: 'place',
    size: 48,
    type: 'rounded',
  },
};

export const All = (args) => <Icon {...args} />;
