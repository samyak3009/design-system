import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Badge } from '@/index';
import { AccentAppearance } from '@/common.type';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge as any,
  parameters: {
    docs: {
      page: null,
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Simple default story
export const All: Story = {
  args: {
    children: 'Approved',
    appearance: 'secondary',
  },
};

// Subtle Warning story - simple props based
export const SubtleWarning: Story = {
  args: {
    children: 'Pending',
    appearance: 'warning',
    subtle: true,
  },
};

// Solid Warning story - simple props based
export const SolidWarning: Story = {
  args: {
    children: 'Pending',
    appearance: 'warning',
  },
};

// Complex story for all subtle appearances
export const Subtle = () => {
  const appearances: AccentAppearance[] = [
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
    <div className="d-flex justify-content-between">
      {appearances.map((appear, ind) => {
        return (
          <Badge key={ind} appearance={appear} subtle={true}>
            {appear}
          </Badge>
        );
      })}
    </div>
  );
};

// Complex story for all solid appearances
export const Solid = () => {
  const appearances: AccentAppearance[] = [
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
    <div className="d-flex justify-content-between">
      {appearances.map((appear, ind) => {
        return (
          <Badge key={ind} appearance={appear}>
            {appear}
          </Badge>
        );
      })}
    </div>
  );
};
