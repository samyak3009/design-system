import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Select, Button } from "@/index";

const meta = {
  title: "Components/Select/Multiselect/WithActionButton",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithActionButton: Story = {
  render: () => {
    const medicineList = [
      { label: 'Aspirin', value: 'aspirin' },
      { label: 'Ibuprofen', value: 'ibuprofen' },
      { label: 'Paracetamol', value: 'paracetamol' },
      { label: 'Amoxicillin', value: 'amoxicillin' },
    ];

    const selectRef = React.useRef(null);

    const handleSelect = (selectedOption) => {
      console.log('Selected:', selectedOption);
    };

    const onApplyOptions = () => {
      console.log('Applied options');
    };

    const onCancelOptions = () => {
      console.log('Cancelled options');
    };

    return (
      <div style={{ width: '300px' }}>
        <Select
          ref={selectRef}
          isMultiSelect={true}
          options={medicineList}
          placeholder="Select medicines"
          onSelect={handleSelect}
          withApplyButton={true}
          onApplyOptions={onApplyOptions}
          onCancelOptions={onCancelOptions}
        >
          <Select.List>
            {medicineList.map((item, key) => (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            ))}
          </Select.List>
        </Select>
      </div>
    );
  }
};

