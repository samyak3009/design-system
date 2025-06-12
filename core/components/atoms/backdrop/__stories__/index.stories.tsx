/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Backdrop, Button } from '@/index';

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Backdrop',
  component: Backdrop,
  parameters: {
    docs: {
      page: null,
      docPage: {
        noHtml: true,
      },
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Complex story with custom logic - preserved as functional component
export const All = () => {
  const [open, setOpen] = React.useState(false);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div onKeyDown={onKeyDown}>
      <Button onClick={() => setOpen(true)} appearance="primary">
        Trigger Backdrop
      </Button>
      <div onClick={() => setOpen(false)}>
        <Backdrop open={open} />
      </div>
    </div>
  );
};

// Simple story variations for props
export const Closed: Story = {
  args: {
    open: false,
  },
};

export const Open: Story = {
  args: {
    open: true,
  },
};

export const WithCustomZIndex: Story = {
  args: {
    open: true,
    zIndex: 9999,
  },
};
