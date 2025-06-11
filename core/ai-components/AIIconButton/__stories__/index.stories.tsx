import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { AIIconButton, Text, Row, Column } from '@/index';
import type { AIIconButtonProps } from './index';

const meta: Meta<AIIconButtonProps> = {
  title: 'Components/AI/AIIconButton',
  component: AIIconButton as React.ComponentType<AIIconButtonProps>,
  parameters: {
    docs: {
      page: null,
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    icon: 'import_contacts',
    tooltip: 'Import Contacts',
  },
};

export const States = () => {
  return (
    <Row>
      <Column className="d-flex ml-10 align-items-center flex-column">
        <AIIconButton icon="import_contacts" tooltip="Import Contacts" />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </Column>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" disabled={true} tooltip="Import Contacts" />
        <Text appearance="subtle" className="mt-6">
          Disabled
        </Text>
      </Column>
    </Row>
  );
};

export const IconSize: Story = {
  render: () => (
    <Row>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" />
        <Text appearance="subtle" className="mt-6">
          Regular
        </Text>
      </Column>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" size="large" />
        <Text appearance="subtle" className="mt-6">
          Large
        </Text>
      </Column>
    </Row>
  ),
};

export const IconPosition = () => {
  return (
    <Row>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" tooltip="Import Contacts" />
        <Text appearance="subtle" className="mt-6">
          Top
        </Text>
      </Column>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="edit" position="bottom" tooltip="Edit" />
        <Text appearance="subtle" className="mt-6">
          Bottom
        </Text>
      </Column>
    </Row>
  );
};
