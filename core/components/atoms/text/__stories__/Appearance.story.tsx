import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@/index";

const meta = {
  title: "Components/text/Appearance",
  component: Text,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Appearance: Story = {
  args: {
    appearance: "default",
    children: "This is a text component"
  },
  render: (args) => {
    const appearances = ["default", "subtle", "white", "primary"];

    return (
      <div className="d-flex flex-column">
        {appearances.map((appearance, index) => (
          <div key={index} className="mb-4">
            <div className={appearance === "white" ? "bg-dark p-4" : ""}>
              <Text {...args} appearance={appearance}>
                {appearance.charAt(0).toUpperCase() + appearance.slice(1)} text
              </Text>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
