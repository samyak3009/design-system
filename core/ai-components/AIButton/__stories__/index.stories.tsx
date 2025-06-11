import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { AIButton } from '@/index';

const meta: Meta<typeof AIButton> = {
  title: 'Components/AI/AIButton',
  component: AIButton,
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
  args: {
    children: 'Primary Button',
    appearance: 'primary',
  },
};

export const WithoutSparkle: Story = {
  args: {
    children: 'AI Button',
    withSparkle: false,
  },
};

export const State = () => {
  return (
    <div className="d-flex">
      <AIButton className="mr-10">AI Button</AIButton>
      <AIButton disabled={true}>Disabled Button</AIButton>
    </div>
  );
};
