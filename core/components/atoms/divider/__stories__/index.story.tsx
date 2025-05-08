import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Divider, Row, Column, Card, CardBody, Text, Heading } from "@/index";

const meta = {
  title: "Components/Divider/All",
  component: Divider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: () => (
    <Column size="10">
      <Card shadow="none">
        <CardBody className="p-0">
          <Row className="py-4 px-6">
            <Heading>Assessment Report</Heading>
          </Row>
          <Divider />
          <Row className="py-4 px-6">
            <Text>This is a sample report with a divider</Text>
          </Row>
        </CardBody>
      </Card>
    </Column>
  )
};

