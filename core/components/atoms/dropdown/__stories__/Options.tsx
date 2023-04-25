import { getSearchedOptions } from '../utility';

type OptionType = 'DEFAULT' | 'WITH_ICON' | 'WITH_META' | 'ICON_WITH_META';

interface OptionSchema extends Record<string, any> {
  label: string;
  value: React.ReactText;
  icon: string;
  subInfo: string;
  optionType?: OptionType;
  selected?: boolean;
  disabled?: boolean;
  group?: string;
}

interface SelectedOptionSchema extends Record<string, any> {
  label: string;
  value: React.ReactText;
  selected?: boolean;
}

interface fetchOptionSchema {
  searchTerm?: string | undefined;
  count: number;
  options: OptionSchema[];
}

export const dropdownOptions: OptionSchema[] = [];
export const preSelectedOptions: SelectedOptionSchema[] = [];
export const storyOptions: OptionSchema[] = [];
export const disabledStoryOptions: OptionSchema[] = [];
export const iconOptions: OptionSchema[] = [];
export const subInfoOptions: OptionSchema[] = [];
export const iconWithSubinfoOptions: OptionSchema[] = [];

for (let i = 1; i <= 10; i++) {
  storyOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    icon: 'events',
    subInfo: 'subInfo',
  });
}

for (let i = 1; i <= 10; i++) {
  disabledStoryOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    icon: 'events',
    subInfo: 'subInfo',
    disabled: i === 2,
  });
}

for (let i = 1; i <= 10; i++) {
  iconOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    icon: 'events',
    subInfo: 'subInfo',
    optionType: 'WITH_ICON',
  });
}

for (let i = 1; i <= 10; i++) {
  subInfoOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    icon: 'events',
    subInfo: 'subInfo',
    optionType: 'WITH_META',
  });
}

for (let i = 1; i <= 10; i++) {
  iconWithSubinfoOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    icon: 'events',
    subInfo: 'subInfo',
    optionType: 'ICON_WITH_META',
  });
}

for (let i = 1; i <= 100; i++) {
  preSelectedOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    selected: i === 2 || i === 3,
  });
}

for (let i = 1; i <= 40; i++) {
  dropdownOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    group: 'Group 1',
    icon: 'events',
    subInfo: 'subInfo',
  });
}
for (let i = 41; i <= 100; i++) {
  dropdownOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    group: 'Group 2',
    icon: 'events',
    subInfo: 'subInfo',
  });
}

export const selectedStoryOptions: SelectedOptionSchema[] = [];

for (let i = 1; i <= 10; i++) {
  selectedStoryOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    selected: i === 2,
  });
}

export const multiSelectedStoryOptions: SelectedOptionSchema[] = [];

for (let i = 1; i <= 10; i++) {
  multiSelectedStoryOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    selected: i === 2 || i === 7,
  });
}

export const storyWrapOptions = [
  {
    label: 'Design System Dropdown',
    value: 'Design System Dropdown',
  },
  {
    label: 'UI Kit Dropdown',
    value: 'UI Kit Dropdown',
  },
  {
    label: 'Innovaccer Analytics',
    value: 'Innovaccer Analytics',
  },
];

export const subInfoItems = [
  {
    label: 'Option 1',
    value: 'Option 1',
    subInfo: 'subInfo',
  },
  {
    label: 'Option 2',
    value: 'Option 2',
    subInfo: 'subInfo',
  },
  {
    label: 'Option 3',
    value: 'Option 3',
    subInfo: 'subInfo',
  },
];

export const iconItems = [
  {
    label: 'Option 1',
    value: 'Option 1',
    icon: 'events',
  },
  {
    label: 'Option 2',
    value: 'Option 2',
    icon: 'events',
  },
  {
    label: 'Option 3',
    value: 'Option 3',
    icon: 'events',
  },
];

export const fetchOptions = (searchTerm: string) => {
  const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
  return new Promise<fetchOptionSchema>((resolve) => {
    window.setTimeout(() => {
      resolve({
        searchTerm,
        options: searchedOptions,
        count: searchedOptions.length,
      });
    }, 1000);
  });
};
