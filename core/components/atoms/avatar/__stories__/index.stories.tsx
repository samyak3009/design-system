import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Avatar, Row, Column, Text, Icon, Tooltip } from '@/index';

const meta: Meta<any> = {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      page: null,
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Avatar
export const DefaultAvatar: Story = {
  args: {
    firstName: 'John',
    lastName: 'Doe',
    appearance: 'primary',
  },
};

// All props example
export const All: Story = {
  args: {
    appearance: 'primary',
    size: 'tiny',
    withTooltip: true,
    firstName: 'John',
    lastName: 'Doe',
  },
};

// With Icon
export const WithIcon = () => {
  return (
    <Avatar appearance="primary" withTooltip={true} firstName="Innovaccer" lastName="Bot" shape="square">
      <Avatar.Icon name="smart_toy" />
    </Avatar>
  );
};

// With Image
export const WithImage = () => {
  return (
    <Avatar appearance="secondary" withTooltip={true} firstName="Innovaccer" lastName="logo">
      <Avatar.Image src="https://design.innovaccer.com/images/withoutType.png" />
    </Avatar>
  );
};

// With SVG
export const WithSvg = () => {
  return (
    <Avatar withTooltip={true} firstName="John" lastName="Doe">
      <Avatar.Image>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px">
          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </Avatar.Image>
    </Avatar>
  );
};

// With Suffix
export const WithSuffix: Story = {
  args: {
    withTooltip: true,
    firstName: 'John',
    lastName: 'Doe',
    disabled: true,
    tooltipSuffix: '(Deactivated)',
  },
};

// States
export const States = () => {
  return (
    <Row>
      <Column className="d-flex align-items-center flex-column">
        <Avatar appearance="primary" firstName="John" lastName="Doe" />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </Column>
      <Column className="d-flex align-items-center flex-column">
        <Avatar appearance="primary" firstName="John" lastName="Doe" disabled={true} tooltipSuffix="(Deactivated)" />
        <Text appearance="subtle" className="mt-6">
          Disabled
        </Text>
      </Column>
    </Row>
  );
};

// Presence
export const Presence = () => {
  return (
    <Row className="w-50">
      <Column>
        <Text weight="strong">Active</Text>
        <br />
        <br />
        <Avatar firstName="John" lastName="Doe" presence="active" />
      </Column>
      <Column>
        <Text weight="strong">Away</Text>
        <br />
        <br />
        <Avatar firstName="John" lastName="Doe" presence="away" />
      </Column>
    </Row>
  );
};

// Status With Icon
export const StatusWithIcon = () => {
  return (
    <Avatar
      lastName="Doe"
      firstName="John"
      appearance="primary"
      status={
        <Tooltip tooltip="Verified" position="top">
          <Icon name="done" size={10} appearance="white" className="p-1 bg-success" />
        </Tooltip>
      }
    />
  );
};

// Status With Image - using placeholder image since original asset not available
export const StatusWithImage = () => {
  return (
    <Avatar
      firstName="Tom"
      lastName="Yusuf"
      appearance="accent1"
      status={
        <Tooltip tooltip="DND" position="top">
          <div style={{ width: '14px', height: '14px', backgroundColor: '#ccc', borderRadius: '2px' }} />
        </Tooltip>
      }
    />
  );
};

// Variants - Appearance
export const Appearance = () => {
  const appearances = [
    'primary',
    'secondary',
    'alert',
    'warning',
    'success',
    'accent1',
    'accent2',
    'accent3',
    'accent4',
  ];

  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-9">
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            <br />
            <br />
            <Avatar firstName="John" lastName="Doe" appearance={appear as any} />
          </div>
        );
      })}
    </div>
  );
};

// Variants - Shape
export const Shape = () => {
  return (
    <Row className="w-50">
      <Column>
        <Text weight="strong">Round</Text>
        <br />
        <br />
        <Avatar appearance="accent2" firstName="John" lastName="Doe" />
      </Column>
      <Column>
        <Text weight="strong">Square</Text>
        <br />
        <br />
        <Avatar appearance="accent2" firstName="John" lastName="Doe" shape="square" />
      </Column>
    </Row>
  );
};

// Variants - Size
export const Size = () => {
  return (
    <div>
      <Row>
        <Column>
          <Text weight="strong">Regular</Text>
          <div className="d-flex mt-7">
            <Avatar firstName="John" lastName="Doe" className="mr-8" />
            <Avatar appearance="accent4" firstName="John" lastName="Doe" shape="square" />
          </div>
        </Column>
        <Column>
          <Text weight="strong">Tiny</Text>
          <div className="d-flex mt-7">
            <Avatar firstName="John" lastName="Doe" size="tiny" className="mr-8" />
            <Avatar appearance="accent4" firstName="John" lastName="Doe" shape="square" size="tiny" />
          </div>
        </Column>
      </Row>
    </div>
  );
};
