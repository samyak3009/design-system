import * as React from 'react';
import { Input, Text, Label, HelpText } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const withLabel = () => {
  return (
    <div className="Row">
      <div className="mr-9 mb-8 w-25">
        <div style={{ height: '72px' }}>
          <Label withInput={true} required={true}>
            Full Name
          </Label>
          <Input name="input" onChange={action('on-change')} onClear={action('on-clear')} required={true} />
        </div>
        <br />
        <Text weight="strong">No Help Text</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Label withInput={true} required={true}>
          Password
        </Label>
        <Input
          name="input"
          type="password"
          onChange={action('on-change')}
          onClear={action('on-clear')}
          required={true}
        />
        <HelpText message={'Pick a strong, unique password'} />
        <br />
        <br />
        <Text weight="strong">Help Text Default</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Label withInput={true} required={true}>
          Password
        </Label>
        <Input
          name="input"
          type="password"
          onChange={action('on-change')}
          onClear={action('on-clear')}
          required={true}
          error={true}
        />
        <HelpText error={true} message={'Pick a strong, unique password'} />
        <br />
        <Text weight="strong">Help Text Error</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Input/Variants/Types/With Label',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
        props: {
          exclude: ['autocomplete'],
        },
      },
    },
  },
};
