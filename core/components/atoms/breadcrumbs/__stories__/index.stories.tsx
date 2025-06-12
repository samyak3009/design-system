import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Breadcrumbs, PageHeader } from '@/index';
import { action } from '@/utils/action';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      page: null,
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LessThan4Levels: Story = {
  args: {
    list: [
      {
        label: 'Level 0',
        link: '/level0',
      },
      {
        label: 'Level 1',
        link: '/level1',
      },
      {
        label: 'Level 2',
        link: '/level2',
      },
      {
        label: 'Level 3',
        link: '/level3',
      },
    ],
    onClick: (link: string) => action(`on-click: ${link}`)(),
  },
  render: (args) => (
    <div className="bg-secondary-lightest">
      <Breadcrumbs {...args} />
    </div>
  ),
};

export const MoreThan4Levels: Story = {
  args: {
    list: [
      {
        label: 'Level 0',
        link: '/level0',
      },
      {
        label: 'Level 1',
        link: '/level1',
      },
      {
        label: 'Level 2',
        link: '/level2',
      },
      {
        label: 'Level 3',
        link: '/level3',
      },
      {
        label: 'Level 4',
        link: '/level4',
      },
    ],
    onClick: (link: string) => action(`on-click: ${link}`)(),
  },
  render: (args) => (
    <div className="bg-secondary-lightest">
      <Breadcrumbs {...args} />
    </div>
  ),
};

export const LabelTruncate = () => {
  const breadcrumbs = (
    <Breadcrumbs
      list={[
        {
          label: 'eCQM Performance year 2022',
          link: '/eCQM',
        },
        {
          label: 'Report 1',
          link: '/report1',
        },
      ]}
      onClick={(link) => action(`on-click: ${link}`)}
      showTooltip={true}
    />
  );

  return (
    <div className="py-6 bg-secondary-lightest">
      <PageHeader title="eCQM Performance year 2022" breadcrumbs={breadcrumbs} />
    </div>
  );
};

export const WithTooltip: Story = {
  args: {
    list: [
      {
        label: 'Very long breadcrumb label that might need truncation',
        link: '/level0',
      },
      {
        label: 'Another long label',
        link: '/level1',
      },
    ],
    onClick: (link: string) => action(`on-click: ${link}`)(),
    showTooltip: true,
  },
  render: (args) => (
    <div className="bg-secondary-lightest">
      <Breadcrumbs {...args} />
    </div>
  ),
};

export const WithoutTooltip: Story = {
  args: {
    list: [
      {
        label: 'Home',
        link: '/home',
      },
      {
        label: 'Products',
        link: '/products',
      },
      {
        label: 'Category',
        link: '/category',
      },
    ],
    onClick: (link: string) => action(`on-click: ${link}`)(),
    showTooltip: false,
  },
  render: (args) => (
    <div className="bg-secondary-lightest">
      <Breadcrumbs {...args} />
    </div>
  ),
};
