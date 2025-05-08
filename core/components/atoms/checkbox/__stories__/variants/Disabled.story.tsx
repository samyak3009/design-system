import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/index';

const meta = {
  title: 'Components/checkbox/variants/Disabled',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Checkbox>
          Disabled Example
        </Checkbox>
      </div>
    );
  }
};
