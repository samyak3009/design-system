import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { ActionCard, Icon, Text } from '@/index';

const meta: Meta<typeof ActionCard> = {
  title: 'Components/Interactive Card/Action Card',
  component: ActionCard,
  parameters: {
    docs: {
      page: null,
      propDescription: 'Note: All the valid properties of HTML DIV elements are acceptable as a prop',
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary story - simple ActionCard with centered content
export const Default: Story = {
  args: {
    className: 'w-25',
    children: (
      <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
        <Icon name="store" size={24} className="mb-4" />
        <Text weight="strong" className="mb-2">
          Marketplace
        </Text>
        <Text appearance="subtle">Explore and purchase apps and add-ons</Text>
      </div>
    ),
  },
};

// State variations - Default and Disabled states
export const States = () => {
  return (
    <div>
      <Text weight="strong">Default:</Text>
      <ActionCard className="w-25 mb-8 mt-6">
        <div className="d-flex justify-content-center p-6 text-align-start">
          <Icon name="store" size={24} className="mr-5" />
          <div>
            <Text weight="strong">Marketplace</Text>
            <br />
            <Text className="pt-2" appearance="subtle">
              Explore and purchase apps and add-ons
            </Text>
          </div>
        </div>
      </ActionCard>

      <Text weight="strong">Disabled:</Text>
      <ActionCard disabled={true} className="w-25 mt-6">
        <div className="d-flex justify-content-center p-6 text-align-start">
          <Icon name="store" size={24} className="mr-5" />
          <div>
            <Text weight="strong">Marketplace</Text>
            <br />
            <Text className="pt-2" appearance="subtle">
              Explore and purchase apps and add-ons
            </Text>
          </div>
        </div>
      </ActionCard>
    </div>
  );
};

// Simple disabled state story
export const Disabled: Story = {
  args: {
    disabled: true,
    className: 'w-25',
    children: (
      <div className="d-flex justify-content-center p-6 text-align-start">
        <Icon name="store" size={24} className="mr-5" />
        <div>
          <Text weight="strong">Marketplace</Text>
          <br />
          <Text className="pt-2" appearance="subtle">
            Explore and purchase apps and add-ons
          </Text>
        </div>
      </div>
    ),
  },
};

// Layout variations - different content alignments
export const Layouts = () => {
  return (
    <div>
      <Text weight="strong">Center Content Alignment:</Text>
      <ActionCard className="w-25 mb-8 mt-6">
        <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
          <Icon name="store" size={24} className="mb-4" />
          <Text weight="strong" className="mb-2">
            Marketplace
          </Text>
          <Text appearance="subtle">Explore and purchase apps and add-ons</Text>
        </div>
      </ActionCard>

      <Text weight="strong">Left Content Alignment:</Text>
      <ActionCard className="w-25 mt-6">
        <div className="d-flex justify-content-center p-6 text-align-start">
          <Icon name="store" size={24} className="mr-5" />
          <div>
            <Text weight="strong">Marketplace</Text>
            <br />
            <Text className="pt-2" appearance="subtle">
              Explore and purchase apps and add-ons
            </Text>
          </div>
        </div>
      </ActionCard>
    </div>
  );
};

// Center aligned content story
export const CenterAligned: Story = {
  args: {
    className: 'w-25',
    children: (
      <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
        <Icon name="store" size={24} className="mb-4" />
        <Text weight="strong" className="mb-2">
          Marketplace
        </Text>
        <Text appearance="subtle">Explore and purchase apps and add-ons</Text>
      </div>
    ),
  },
};

// Left aligned content story
export const LeftAligned: Story = {
  args: {
    className: 'w-25',
    children: (
      <div className="d-flex justify-content-center p-6 text-align-start">
        <Icon name="store" size={24} className="mr-5" />
        <div>
          <Text weight="strong">Marketplace</Text>
          <br />
          <Text className="pt-2" appearance="subtle">
            Explore and purchase apps and add-ons
          </Text>
        </div>
      </div>
    ),
  },
};

// Card group - multiple cards in a group
export const CardGroup = () => {
  const cardList = [
    {
      icon: 'api',
      title: 'API portal',
      description: 'Access and test out application APIs',
    },
    {
      icon: 'preview',
      title: 'App simulator',
      description: 'Envision and test the apps that you want to integrate with Innovaccer',
    },
    {
      icon: 'widgets',
      title: 'App distribution',
      description: 'Publish and monetize your apps and add-ons',
    },
    {
      icon: 'store',
      title: 'Marketplace',
      description: 'Explore and purchase apps and add-ons',
    },
  ];

  return (
    <div className="d-flex">
      {cardList.map((cardItem, key) => {
        const { icon, title, description } = cardItem;
        return (
          <ActionCard key={key} className="mr-6">
            <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
              <Icon name={icon} size={24} className="mb-4" />
              {title && (
                <Text weight="strong" className="mb-2">
                  {title}
                </Text>
              )}
              {description && <Text appearance="subtle">{description}</Text>}
            </div>
          </ActionCard>
        );
      })}
    </div>
  );
};

// With onClick handler
export const WithClickHandler: Story = {
  args: {
    className: 'w-25',
    onClick: () => alert('ActionCard clicked!'),
    children: (
      <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
        <Icon name="store" size={24} className="mb-4" />
        <Text weight="strong" className="mb-2">
          Clickable Card
        </Text>
        <Text appearance="subtle">Click me to trigger an action</Text>
      </div>
    ),
  },
};

// With custom zIndex for disabled overlay
export const WithCustomZIndex: Story = {
  args: {
    disabled: true,
    zIndex: 999,
    className: 'w-25',
    children: (
      <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
        <Icon name="store" size={24} className="mb-4" />
        <Text weight="strong" className="mb-2">
          Custom Z-Index
        </Text>
        <Text appearance="subtle">Disabled with custom z-index overlay</Text>
      </div>
    ),
  },
};
