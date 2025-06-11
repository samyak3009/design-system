import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { SaraSparkle, Text } from '@/index';
import type { SaraSparkleProps } from '../index';

const meta: Meta<SaraSparkleProps> = {
  title: 'Components/AI/SaraSparkle',
  component: SaraSparkle as any,
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
    <div className="d-flex vw-50">
      <div className="d-flex flex-column align-items-center text-align-center w-100">
        <SaraSparkle size={64} />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle state="listening" size={64} />
        <Text appearance="subtle" className="mt-6">
          Listening
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle state="short-processing" size={64} />
        <Text appearance="subtle" className="mt-6">
          Short Processing
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle state="long-processing" size={64} />
        <Text appearance="subtle" className="mt-6">
          Long Processing
        </Text>
      </div>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div className="d-flex vw-50">
      <div className="d-flex flex-column align-items-center text-align-center w-100">
        <SaraSparkle size={16} />
        <Text appearance="subtle" className="mt-6">
          16
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle size={24} />
        <Text appearance="subtle" className="mt-6">
          24
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle size={32} />
        <Text appearance="subtle" className="mt-6">
          32
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle size={48} />
        <Text appearance="subtle" className="mt-6">
          48
        </Text>
      </div>
    </div>
  );
};

export const CustomSize = () => {
  return <SaraSparkle size={100} />;
};
