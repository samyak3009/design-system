import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Text, PlaceholderImage } from "@/index";

const meta = {
  title: "Components/Progress Indicators/Placeholder/Image/Shape",
  component: PlaceholderImage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PlaceholderImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shape: Story = {
  render: () => {
    const size = "medium";

    return (
      <div className="d-flex">
        <div className="mr-6">
          <PlaceholderImage size={size} round={false} />
          <br />
          <Text weight="strong">Square</Text>
        </div>
        <div>
          <PlaceholderImage size={size} round={true} />
          <br />
          <Text weight="strong">Round</Text>
        </div>
      </div>
    );
  }
};

