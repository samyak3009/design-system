import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { AvatarGroup, Avatar, Text, Tooltip, Icon } from '@/index';

const meta: Meta<any> = {
  title: 'Components/Avatar/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    docs: {
      page: null,
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary story (All)
export const All: Story = {
  args: {
    max: 2,
    popoverOptions: {
      position: 'bottom',
      withSearch: true,
      searchPlaceholder: 'Search User',
      on: 'click',
    },
    list: [
      {
        firstName: 'John',
        lastName: 'Doe',
      },
      {
        firstName: 'Steven',
        lastName: 'Packton',
      },
      {
        firstName: 'Nancy',
        lastName: 'Wheeler',
      },
      {
        firstName: 'Monica',
        lastName: 'Geller',
      },
    ],
  },
};

// With Image story
export const WithImage: Story = {
  args: {
    list: [
      {
        firstName: 'Satyam',
        lastName: 'Yadav',
        image: <Avatar.Image src="https://design.innovaccer.com/images/avatar1.png" />,
      },
      {
        firstName: 'Anuradha',
        lastName: 'Aggarwal',
        image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
      },
      {
        firstName: 'Shivaansh',
        lastName: 'Sharma',
        image: <Avatar.Image src="https://design.innovaccer.com/images/github.png" />,
      },
    ],
  },
};

// With Icon story
export const WithIcon: Story = {
  args: {
    list: [
      {
        firstName: 'John',
        lastName: 'Doe',
        icon: <Avatar.Icon name="person" />,
      },
      {
        firstName: 'Steven',
        lastName: 'Packton',
        icon: <Avatar.Icon name="person" />,
      },
      {
        firstName: 'Nancy',
        lastName: 'Wheeler',
        icon: <Avatar.Icon name="person" />,
      },
    ],
  },
};

// With Presence story
export const WithPresence: Story = {
  args: {
    list: [
      {
        firstName: 'John',
        lastName: 'Doe',
      },
      {
        firstName: 'Steven',
        lastName: 'Packton',
        presence: 'active',
      },
      {
        firstName: 'Nancy',
        lastName: 'Wheeler',
        presence: 'away',
      },
      {
        firstName: 'Monica',
        lastName: 'Geller',
      },
      {
        firstName: 'Anuradha',
        lastName: 'Aggarwal',
        image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
        presence: 'active',
      },
      {
        firstName: 'Rachel',
        lastName: 'Green',
        presence: 'away',
        disabled: true,
      },
      {
        firstName: 'Walter',
        lastName: 'Wheeler',
        presence: 'away',
      },
      {
        firstName: 'Mark',
        lastName: 'Snow',
      },
    ],
  },
};

// With Status story
export const WithStatus: Story = {
  args: {
    list: [
      {
        firstName: 'John',
        lastName: 'Doe',
      },
      {
        firstName: 'Steven',
        lastName: 'Packton',
        status: (
          <Tooltip position="top" tooltip="Verified">
            <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
          </Tooltip>
        ),
      },
      {
        firstName: 'Nancy',
        lastName: 'Wheeler',
        status: (
          <Tooltip position="top" tooltip="On Call">
            <Icon appearance="white" className="p-1 bg-primary" name="phone" size={10} />
          </Tooltip>
        ),
      },
      {
        firstName: 'Monica',
        lastName: 'Geller',
      },
      {
        firstName: 'Anuradha',
        lastName: 'Aggarwal',
        image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
        status: (
          <Tooltip position="top" tooltip="Verified">
            <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
          </Tooltip>
        ),
      },
      {
        firstName: 'Rachel',
        lastName: 'Green',
        status: (
          <Tooltip position="top" tooltip="Away">
            <Icon appearance="white" className="p-1 bg-warning" name="access_time" size={10} />
          </Tooltip>
        ),
        disabled: true,
      },
      {
        firstName: 'Walter',
        lastName: 'Wheeler',
        status: (
          <Tooltip position="top" tooltip="Away">
            <Icon appearance="white" className="p-1 bg-warning" name="access_time" size={10} />
          </Tooltip>
        ),
      },
      {
        firstName: 'Mark',
        lastName: 'Snow',
      },
    ],
  },
};

// Complex stories that need custom render functions

// Size variant
export const Size = () => {
  const popoverOptions = { on: 'hover' as const };
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
  ];

  return (
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Regular</Text>
        <div className="mt-4">
          <AvatarGroup size="regular" list={list} popoverOptions={popoverOptions} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Tiny</Text>
        <div className="mt-4">
          <AvatarGroup size="tiny" list={list} popoverOptions={popoverOptions} />
        </div>
      </div>
    </div>
  );
};

// Overflow Behavior
export const OverflowBehavior = () => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Mark',
      lastName: 'Snow',
    },
  ];

  return (
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Dynamic Width (Recommended)</Text>
        <div className="mt-4">
          <AvatarGroup list={list} popoverOptions={{ width: 200 }} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Truncate</Text>
        <div className="mt-4">
          <AvatarGroup list={list} />
        </div>
      </div>
    </div>
  );
};

// State variants
export const State = () => {
  const popoverOptions = { on: 'hover' as const };
  const disabledList = [
    {
      firstName: 'John',
      lastName: 'Doe',
      disabled: true,
      tooltipSuffix: '(Deactivated)',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
      disabled: true,
      tooltipSuffix: '(Deactivated)',
    },
  ];

  return <AvatarGroup list={disabledList} popoverOptions={popoverOptions} />;
};

// Border Color variant
export const BorderColor = () => {
  const popoverOptions = { on: 'hover' as const };
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
  ];

  return (
    <div className="d-flex flex-column">
      <div className="mb-8">
        <Text weight="strong" className="mb-4">
          White Border
        </Text>
        <AvatarGroup borderColor="white" list={list} popoverOptions={popoverOptions} />
      </div>
      <div className="mb-8">
        <Text weight="strong" className="mb-4">
          Primary Border
        </Text>
        <AvatarGroup borderColor="var(--primary)" list={list} popoverOptions={popoverOptions} />
      </div>
      <div className="mb-8">
        <Text weight="strong" className="mb-4">
          Alert Border
        </Text>
        <AvatarGroup borderColor="var(--alert)" list={list} popoverOptions={popoverOptions} />
      </div>
    </div>
  );
};

// Trigger variant
export const Trigger = () => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
  ];

  return (
    <div className="d-flex flex-column">
      <div className="mb-8">
        <Text weight="strong" className="mb-4">
          Hover
        </Text>
        <AvatarGroup list={list} popoverOptions={{ on: 'hover' }} />
      </div>
      <div className="mb-8">
        <Text weight="strong" className="mb-4">
          Click
        </Text>
        <AvatarGroup list={list} popoverOptions={{ on: 'click' }} />
      </div>
    </div>
  );
};

// Custom Popover
export const CustomPopover = () => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Mark',
      lastName: 'Snow',
    },
  ];

  const popperRenderer = (names: any[]) => {
    const AvatarList = names.map((avatar, index) => {
      const { firstName, lastName, appearance } = avatar;

      return (
        <div className="d-flex align-items-center mr-4 mb-4" key={index}>
          <Avatar
            firstName={firstName}
            lastName={lastName}
            appearance={appearance}
            className="mr-4"
            withTooltip={false}
          />
          <Text>{`${firstName} ${lastName}`}</Text>
        </div>
      );
    });

    return (
      <div className="overflow-auto py-4 px-6" style={{ maxHeight: 'var(--spacing-320)' }}>
        {AvatarList}
      </div>
    );
  };

  return <AvatarGroup list={list} popoverOptions={{ popperRenderer, dark: false }} />;
};
