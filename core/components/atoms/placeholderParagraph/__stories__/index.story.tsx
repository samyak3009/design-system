import type { Meta, StoryObj } from "@storybook/react";
import { PlaceholderParagraph, Placeholder } from "@/index";

const meta = {
  title: "Components/Progress Indicators/Placeholder/Paragraph/All",
  component: PlaceholderParagraph,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PlaceholderParagraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    length: "medium",
    size: "l",
  },
};

