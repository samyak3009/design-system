import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@/index";

const meta = {
  title: "Components/heading/Appearance",
  component: Heading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Appearance: Story = {
  args: {
    appearance: "default",
    children: "This is a heading component"
  },
  render: (args) => {
    const appearances = ["default", "subtle", "white", "primary"];

    return (
      <div className="d-flex flex-column">
        {appearances.map((appearance, index) => (
          <div key={index} className="mb-4">
            <div className={appearance === "white" ? "bg-dark p-4" : ""}>
              <Heading {...args} appearance={appearance}>
                {appearance.charAt(0).toUpperCase() + appearance.slice(1)} heading
              </Heading>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
