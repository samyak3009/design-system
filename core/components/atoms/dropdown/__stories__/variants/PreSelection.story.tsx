import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@/index';

const meta = {
  title: 'Components/Dropdown/PreSelection',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PreSelection: Story = {
  render: () => {
    const options = [
      {
        label: 'Option 1',
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
    ];
    
    return (
      <div style={{ width: '300px' }}>
        <Dropdown
          options={options}
          placeholder="Select an option"
        />
      </div>
    );
  }
};
