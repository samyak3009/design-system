import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Sara, Text } from '@/index';
import type { SaraProps } from '../index';

const meta: Meta<SaraProps> = {
  title: 'Components/AI/Sara',
  component: Sara as any,
  parameters: {
    docs: {
      page: null,
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {},
};

export const States = () => {
  return (
    <div className="d-flex w-75">
      <div className="d-flex flex-column align-items-center text-align-center w-100">
        <Sara />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </div>
      <div className="d-flex flex-column align-items-center text-align-center w-100">
        <Sara state="resting" />
        <Text appearance="subtle" className="mt-6">
          Resting
        </Text>
      </div>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center w-75">
        <div className="d-flex flex-column align-items-center text-align-center w-100">
          <Sara />
          <Text appearance="subtle" className="mt-6">
            32
          </Text>
        </div>
        <div className="d-flex flex-column align-items-center text-align-center w-100">
          <Sara size={48} />
          <Text appearance="subtle" className="mt-6">
            48
          </Text>
        </div>
        <div className="d-flex flex-column align-items-center text-align-center w-100">
          <Sara size={64} />
          <Text appearance="subtle" className="mt-6">
            64
          </Text>
        </div>
      </div>
    </div>
  );
};

export const CustomSize = () => {
  return <Sara size={100} />;
};
