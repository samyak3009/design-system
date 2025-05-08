import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '@/index';

const meta = {
  title: 'Components/grid/GridInModal',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GridInModal: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Grid>
          GridInModal Example
        </Grid>
      </div>
    );
  }
};
