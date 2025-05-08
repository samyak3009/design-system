import type { Meta, StoryObj } from "@storybook/react";
import { Grid, GridCell } from "@/index";

const meta = {
  title: "Components/Grid/Variants/Grid Loading State",
  component: Grid,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GridLoadingState: Story = {
  args: {
    schema: "[",
  },
};

