import React from 'react';
import { Icon, Text } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon/Variants/Appearance',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Icon has different appearances',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Appearance: Story = {
  render: () => {
    const appearances = [
      ['primary', 'primary_dark', 'primary_darker', 'primary_lighter'],
      ['alert', 'alert_dark', 'alert_darker', 'alert_lighter'],
      ['success', 'success_dark', 'success_darker', 'success_lighter'],
    ];

    const name = 'events';
    
    return (
      <div>
        {appearances.map((appearance, ind) => {
          return (
            <div key={ind} className="d-flex mb-8">
              <div>
                <Icon className="mr-12 mb-4" appearance={appearance[0] as any} size={48} name={name} />
                <br />
                <Text weight="strong">{appearance[0]}</Text>
              </div>

              <div>
                <Icon className="mr-12 mb-4" appearance={appearance[1] as any} size={48} name={name} />
                <br />
                <Text weight="strong">{appearance[1]}</Text>
              </div>

              <div>
                <Icon className="mr-12 mb-4" appearance={appearance[2] as any} size={48} name={name} />
                <br />
                <Text weight="strong">{appearance[2]}</Text>
              </div>

              {appearance[3] && (
                <div>
                  <Icon className="mb-4" appearance={appearance[3] as any} size={48} name={name} />
                  <br />
                  <Text weight="strong">{appearance[3]}</Text>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  },
};
