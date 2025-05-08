import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "@/index";

const meta = {
  title: "Components/Typography/Paragraph/Appearance",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Appearance: Story = {
  render: () => {
    const appearances = ["default", "subtle", "white", "primary"];

    return (
      <div className="d-flex">
        {appearances.map((appearance, index) => (
          <div key={index} className="mr-6">
            <div className={appearance === "white" ? "bg-dark p-4" : "bg-transparent"}>
              <Paragraph appearance={appearance}>
                Paragraph with {appearance} appearance
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

