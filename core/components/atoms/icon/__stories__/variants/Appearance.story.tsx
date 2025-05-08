import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/index";

const meta = {
  title: "Components/icon/Appearance",
  component: Icon,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Appearance: Story = {
  args: {
    appearance: "default",
    children: "This is a icon component"
  },
  render: (args) => {
    const appearances = ["default", "subtle", "white", "primary"];

    return (
      <div className="d-flex flex-column">
        {appearances.map((appearance, index) => (
          <div key={index} className="mb-4">
            <div className={appearance === "white" ? "bg-dark p-4" : ""}>
              <Icon {...args} appearance={appearance}>
                {appearance.charAt(0).toUpperCase() + appearance.slice(1)} icon
              </Icon>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
