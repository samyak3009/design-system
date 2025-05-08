import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Subheading } from "@/index";

const meta = {
  title: "Components/subheading/Appearance",
  component: Subheading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Subheading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Appearance: Story = {
  args: {
    appearance: "default",
    children: "This is a subheading component"
  },
  render: (args) => {
    const appearances = ["default", "subtle", "white", "primary"];

    return (
      <div className="d-flex flex-column">
        {appearances.map((appearance, index) => (
          <div key={index} className="mb-4">
            <div className={appearance === "white" ? "bg-dark p-4" : ""}>
              <Subheading {...args} appearance={appearance}>
                {appearance.charAt(0).toUpperCase() + appearance.slice(1)} subheading
              </Subheading>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
