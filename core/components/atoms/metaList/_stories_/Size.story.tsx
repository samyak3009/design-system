import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MetaList } from '@/index';

const meta = {
  title: 'Components/metaList/_stories_/Size',
  component: MetaList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MetaList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Size: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <MetaList>
          Size Example
        </MetaList>
      </div>
    );
  }
};
