import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { AvatarSelection, Avatar, Text, Checkbox, Label, Tooltip, Icon } from '@/index';
import { AvatarData } from '../AvatarSelection';
import './style.css';

const meta: Meta<typeof AvatarSelection> = {
  title: 'Components/Avatar/AvatarSelection',
  component: AvatarSelection as any,
  subcomponents: {
    'AvatarSelection.Input': AvatarSelection.Input as any,
    'AvatarSelection.List': AvatarSelection.List as any,
    'AvatarSelection.Option': AvatarSelection.Option as any,
    'AvatarSelection.EmptyState': AvatarSelection.EmptyState as any,
  },
  parameters: {
    docs: {
      page: null,
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Basic sample data
const basicList: AvatarData[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    selected: true,
  },
  {
    firstName: 'Anuradha',
    lastName: 'Aggarwal',
    image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
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
    icon: <Avatar.Icon name="person" />,
  },
  {
    firstName: 'Satyam',
    lastName: 'Yadav',
    selected: true,
    image: <Avatar.Image src="https://design.innovaccer.com/images/avatar1.png" />,
  },
  {
    firstName: 'Walter',
    lastName: 'Wheeler',
    selected: true,
  },
  {
    firstName: 'Monica',
    lastName: 'Geller',
  },
  {
    firstName: 'Arya',
    lastName: 'Stark',
  },
];

const searchComparator = (searchValue: string, data: AvatarData) => {
  if (searchValue === '') {
    return true;
  }
  return data.firstName?.toLowerCase().includes(searchValue.toLowerCase()) || false;
};

const onSelectHandler = (props?: AvatarData) => {
  console.log('props', props);
};

// Default/All story
export const All: Story = {
  args: {
    list: basicList,
    withSearch: true,
    onSelect: onSelectHandler,
    searchPlaceholder: 'Search User',
    searchComparator: searchComparator,
  },
};

// With Presence story
export const WithPresence: Story = {
  args: {
    list: [
      {
        firstName: 'John',
        lastName: 'Doe',
        selected: true,
      },
      {
        firstName: 'Anuradha',
        lastName: 'Aggarwal',
        image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
        presence: 'active',
      },
      {
        firstName: 'Nancy',
        lastName: 'Wheeler',
      },
      {
        firstName: 'Monica',
        lastName: 'Geller',
        presence: 'away',
      },
      {
        firstName: 'Arya',
        lastName: 'Stark',
      },
      {
        firstName: 'Rachel',
        lastName: 'Green',
        icon: <Avatar.Icon name="person" />,
      },
      {
        firstName: 'Satyam',
        lastName: 'Yadav',
        selected: true,
        presence: 'away',
        image: <Avatar.Image src="https://design.innovaccer.com/images/avatar1.png" />,
      },
      {
        firstName: 'Walter',
        lastName: 'Wheeler',
        selected: true,
      },
      {
        firstName: 'Monica',
        lastName: 'Geller',
      },
      {
        firstName: 'Arya',
        lastName: 'Stark',
        presence: 'away',
      },
    ],
    withSearch: true,
    onSelect: onSelectHandler,
    searchPlaceholder: 'Search User',
    searchComparator: searchComparator,
  },
};

// With Status story
export const WithStatus: Story = {
  args: {
    list: [
      {
        firstName: 'John',
        lastName: 'Doe',
        selected: true,
        status: (
          <Tooltip position="top" tooltip="Verified">
            <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
          </Tooltip>
        ),
      },
      {
        firstName: 'Anuradha',
        lastName: 'Aggarwal',
        image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
      },
      {
        firstName: 'Nancy',
        lastName: 'Wheeler',
        status: (
          <Tooltip position="top" tooltip="Verified">
            <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
          </Tooltip>
        ),
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
        icon: <Avatar.Icon name="person" />,
      },
      {
        firstName: 'Satyam',
        lastName: 'Yadav',
        selected: true,
        image: <Avatar.Image src="https://design.innovaccer.com/images/avatar1.png" />,
        status: (
          <Tooltip position="top" tooltip="Deactivated">
            <Icon appearance="white" className="p-1 bg-danger" name="remove" size={10} />
          </Tooltip>
        ),
      },
      {
        firstName: 'Walter',
        lastName: 'Wheeler',
        selected: true,
        status: (
          <Tooltip position="top" tooltip="Traveling">
            <Icon appearance="white" className="p-1 bg-secondary" name="water" size={10} />
          </Tooltip>
        ),
      },
      {
        firstName: 'Monica',
        lastName: 'Geller',
        status: (
          <Tooltip position="top" tooltip="Verified">
            <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
          </Tooltip>
        ),
      },
      {
        firstName: 'Arya',
        lastName: 'Stark',
      },
    ],
    withSearch: true,
    onSelect: onSelectHandler,
    searchPlaceholder: 'Search User',
    searchComparator: searchComparator,
  },
};

// States story (requires complex rendering)
export const States = () => {
  const list: AvatarData[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
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
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Paxton',
      selected: true,
    },
  ];

  const disabledList: AvatarData[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
      disabled: true,
      tooltipSuffix: '(Deactivated)',
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
      disabled: true,
      tooltipSuffix: '(Deactivated)',
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
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      disabled: true,
      tooltipSuffix: '(Deactivated)',
    },
    {
      firstName: 'Walter',
      lastName: 'Paxton',
      selected: true,
    },
  ];

  const onSelectHandler = (props?: AvatarData) => {
    console.log('props', props);
  };

  const searchComparator = (searchValue: string, data: AvatarData) => {
    if (searchValue === '') {
      return true;
    }
    return data.firstName?.toLowerCase().includes(searchValue.toLowerCase()) || false;
  };

  return (
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Default</Text>
        <div className="mt-7">
          <AvatarSelection
            list={list}
            withSearch={true}
            onSelect={onSelectHandler}
            searchPlaceholder="Search User"
            searchComparator={searchComparator}
          />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Disabled</Text>
        <div className="mt-7">
          <AvatarSelection
            list={disabledList}
            withSearch={true}
            onSelect={onSelectHandler}
            searchPlaceholder="Search User"
            searchComparator={searchComparator}
          />
        </div>
      </div>
    </div>
  );
};

// Custom story (requires complex rendering)
export const Custom = () => {
  const list: AvatarData[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
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
      firstName: 'Thom',
      lastName: 'Yorke',
      email: 'thom12@gmail.com',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter Harry Paxton',
      lastName: 'Wheeler',
      selected: true,
    },
  ];

  const [avatarList, setAvatarList] = React.useState(list);
  const [searchList, setSearchList] = React.useState(list.slice(5, list.length));
  const [selectedItems, setSelectedItems] = React.useState<AvatarData[]>([
    {
      firstName: 'John',
      lastName: 'Doe',
      iconOptions: {
        name: 'places',
        type: 'outlined',
      },
      selected: true,
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
  ]);

  React.useEffect(() => {
    const updatedList = avatarList.map((avatar) => {
      if (selectedItems.includes(avatar)) {
        avatar.selected = true;
      } else {
        avatar.selected = false;
      }
      return avatar;
    });
    setAvatarList(updatedList);
  }, [selectedItems]);

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    const popoverList = avatarList?.slice(5, avatarList.length);

    const filteredList = popoverList.filter((avatarData) => {
      return avatarData.firstName?.toLowerCase().includes(searchValue.toLowerCase());
    });

    setSearchList(filteredList);
  };

  const onSelectHandler = (list?: AvatarData) => {
    if (list) {
      setSelectedItems([list]);
    }
  };

  const AvatarSelectionItem = (props: { avatarData: AvatarData; isSelected?: AvatarData }) => {
    const { avatarData, isSelected } = props;
    const [showTooltip, setShowTooltip] = React.useState(false);
    const elementRef = React.useRef<HTMLDivElement>(null);

    const { firstName = '', lastName = '', email } = avatarData;
    const name = `${firstName} ${lastName}`;

    return (
      <Tooltip showOnTruncation={true} tooltip={name} elementRef={elementRef} open={showTooltip}>
        <AvatarSelection.Option
          value={avatarData}
          className="d-flex align-items-center"
          onFocus={() => {
            setShowTooltip(true);
          }}
          onBlur={() => {
            setShowTooltip(false);
          }}
        >
          <Checkbox
            key={String(isSelected)}
            checked={!!isSelected}
            label={name}
            size="regular"
            helpText={email}
            labelRef={elementRef}
            className="w-100"
          />
        </AvatarSelection.Option>
      </Tooltip>
    );
  };

  return (
    <AvatarSelection size="tiny" list={avatarList} onSelect={onSelectHandler}>
      <div className="AvatarSelection-wrapper">
        <AvatarSelection.Input placeholder="Search user" onChange={onSearchHandler} />

        {searchList.length === 0 && (
          <AvatarSelection.EmptyState
            title="No users found"
            description="Try modifying your search to find what you are looking for."
          />
        )}

        <AvatarSelection.List>
          {searchList.map((avatarData, index) => {
            const isSelected = selectedItems.find((item) => item.firstName === avatarData.firstName);

            return <AvatarSelectionItem key={index} avatarData={avatarData} isSelected={isSelected} />;
          })}
        </AvatarSelection.List>
      </div>
    </AvatarSelection>
  );
};

// List Item Size story (requires complex rendering)
export const ListItemSize = () => {
  const list: AvatarData[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
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
      selected: true,
    },
  ];

  const listSize = ['standard', 'compressed', 'tight'];
  const [avatarList, setAvatarList] = React.useState(list);
  const [searchList, setSearchList] = React.useState(list.slice(5, list.length));
  const [selectedItems, setSelectedItems] = React.useState<AvatarData[]>([
    {
      firstName: 'John',
      lastName: 'Doe',
      iconOptions: {
        name: 'places',
        type: 'outlined',
      },
      selected: true,
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
  ]);

  React.useEffect(() => {
    const updatedList = avatarList.map((avatar) => {
      if (selectedItems.includes(avatar)) {
        avatar.selected = true;
      } else {
        avatar.selected = false;
      }
      return avatar;
    });
    setAvatarList(updatedList);
  }, [selectedItems]);

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    const popoverList = avatarList?.slice(5, avatarList.length);

    const filteredList = popoverList.filter((avatarData) => {
      return avatarData.firstName?.toLowerCase().includes(searchValue.toLowerCase());
    });

    setSearchList(filteredList);
  };

  const onSelectHandler = (list?: AvatarData) => {
    if (list) {
      setSelectedItems([list]);
    }
  };

  return (
    <div>
      {listSize.map((size, index) => {
        return (
          <div key={index} className="mb-8 w-25">
            <Label htmlFor={size} withInput={true}>
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </Label>
            <br />
            <AvatarSelection size="tiny" list={avatarList} onSelect={onSelectHandler}>
              <AvatarSelection.Input placeholder="Search user" onChange={onSearchHandler} />

              {searchList.length === 0 && (
                <AvatarSelection.EmptyState
                  title="No users found"
                  description="Try modifying your search to find what you are looking for."
                />
              )}

              <AvatarSelection.List size={size as any}>
                {searchList.map((avatarData, index) => {
                  const { firstName = '', lastName = '' } = avatarData;
                  const name = `${firstName} ${lastName}`;

                  const isSelected = selectedItems.find((item) => item.firstName === avatarData.firstName);

                  return (
                    <AvatarSelection.Option key={index} value={avatarData} className="d-flex align-items-center">
                      <Checkbox
                        key={String(isSelected)}
                        defaultChecked={!!isSelected}
                        checked={!!isSelected}
                        size="regular"
                        tabIndex={-1}
                      />
                      <Avatar {...avatarData} className="ml-3 mr-4" withTooltip={false} />
                      <Text className="ellipsis--noWrap">{name}</Text>
                    </AvatarSelection.Option>
                  );
                })}
              </AvatarSelection.List>
            </AvatarSelection>
          </div>
        );
      })}
    </div>
  );
};
