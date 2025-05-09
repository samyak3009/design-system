import React from 'react';
import { Sara } from '@/index';

export default {
  title: 'Components/AI/Sara/Custom Size',
  component: Sara,
  parameters: {
    docs: {
      description: {
        component: 'Sara can be customized to any size',
      },
    },
  },
};

export const CustomSize = () => <Sara size={100} />;
