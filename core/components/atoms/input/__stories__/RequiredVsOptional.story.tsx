import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Input, Label, Text } from "@/index";

const meta = {
  title: "Components/Input/Input/Required Vs Optional Marking",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RequiredVsOptionalMarking: Story = {
  render: () => (
    <div className="d-flex flex-column">
      <div className="mb-4">
        <Label htmlFor="email" withInput={true} required={true}>
          Email
        </Label>
        <Input name="email" placeholder="Required input" />
      </div>
      <div className="mb-4">
        <Label htmlFor="name" withInput={true}>
          Name
        </Label>
        <Input name="name" placeholder="Optional input" />
      </div>
    </div>
  )
};

