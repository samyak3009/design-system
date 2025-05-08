import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChoiceList } from '@/index';

const meta = {
  title: 'Components/choiceList/AllowMultiple',
  component: ChoiceList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChoiceList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllowMultiple: Story = {
  render: () => (
    <div>
      <ChoiceList>
        AllowMultiple Example
      </ChoiceList>
    </div>
  )
};
