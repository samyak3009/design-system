import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChoiceList } from '@/index';

const meta = {
  title: 'Components/choiceList/Overflow',
  component: ChoiceList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChoiceList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overflow: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <ChoiceList>
          Overflow Example
        </ChoiceList>
      </div>
    );
  }
};
