import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/index";

const meta = {
  title: "Components/button/Appearance",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Appearance: Story = {
  args: {
    appearance: "default",
    children: "This is a button component"
  },
  render: (args) => {
    const appearances = ["default", "subtle", "white", "primary"];

    return (
      <div className="d-flex flex-column">
        {appearances.map((appearance, index) => (
          <div key={index} className="mb-4">
            <div className={appearance === "white" ? "bg-dark p-4" : ""}>
              <button {...args} appearance={appearance}>
                {appearance.charAt(0).toUpperCase() + appearance.slice(1)} button
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
