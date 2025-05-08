import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Select, Label } from "@/index";

const meta = {
  title: "Components/Select/LabelOnTop",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelOnTop: Story = {
  render: () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];

    return (
      <div className="w-25">
        <Label withInput={true}>Area code</Label>
        <Select
          options={options}
          placeholder="Select area code"
          onSelect={(selectedOption) => console.log(selectedOption)}
        />
      </div>
    );
  }
};

