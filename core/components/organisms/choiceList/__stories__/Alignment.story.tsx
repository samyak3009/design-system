import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChoiceList } from '@/index';

const meta = {
  title: 'Components/choiceList/Alignment',
  component: ChoiceList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChoiceList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Alignment: Story = {
  render: () => (
    <div>
      <ChoiceList>
        Alignment Example
      </ChoiceList>
    </div>
  )
};
