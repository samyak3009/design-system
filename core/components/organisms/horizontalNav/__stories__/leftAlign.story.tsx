import type { Meta, StoryObj } from "@storybook/react";
import { Modal, Button, HorizontalNav, Select, Label, Heading } from "@/index";

const meta = {
  title: "Components/HorizontalNav/Left Aligned",
  component: HorizontalNav,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HorizontalNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftAligned: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <HorizontalNav
          menus={[
            { label: 'Home', icon: 'home', active: true },
            { label: 'Profile', icon: 'profile' },
            { label: 'Settings', icon: 'settings' }
          ]}
          align="left"
        />
      </div>
    );
  }
};

