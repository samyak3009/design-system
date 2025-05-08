import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/index";

const meta = {
  title: "Components/Avatar/Appearance",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Appearance: Story = {
  args: {
    appearance: "default",
    children: "This is an Avatar component"
  },
  render: (args) => {
    const appearances = ["default", "subtle", "white", "primary"];

    return (
      <div className="d-flex flex-column">
        {appearances.map((appearance, index) => (
          <div key={index} className="mb-4">
            <div className={appearance === "white" ? "bg-dark p-4" : ""}>
              <Avatar {...args} appearance={appearance}>
                {appearance.charAt(0).toUpperCase() + appearance.slice(1)} Avatar
              </Avatar>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
