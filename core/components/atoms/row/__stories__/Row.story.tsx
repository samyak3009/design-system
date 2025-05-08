import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Row } from '@/index';

const meta = {
  title: 'Components/row/Row',
  component: Row,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RowExample: Story = {
  render: () => {
    return (
      <div className="d-flex">
        <Row>
          Row Example
        </Row>
      </div>
    );
  }
};
