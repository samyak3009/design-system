import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Message, Text, LinkButton } from "@/index";

const meta = {
  title: "Components/Message/Variants/Appearance Without Title",
  component: Message,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppearanceWithoutTitle: Story = {
  render: () => {
    const appearances = ["default", "alert", "info", "success", "warning"];

    return (
      <div className="d-flex flex-column">
        {appearances.map((appearance, index) => (
          <div key={index} className="mb-7">
            <Text weight="strong">
              {appearance.charAt(0).toUpperCase() + appearance.slice(1)}
            </Text>
            <Message appearance={appearance}>
              This is a {appearance} message without a title.
            </Message>
          </div>
        ))}
      </div>
    );
  }
};

