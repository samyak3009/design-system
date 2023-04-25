import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Tab, EmptyState } from '@/index';

// CSF format story
export const disabledWithActive = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  const isDisabled = true;
  return (
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6">
      <Tab label="All" icon="call_received" count={10} disabled={isDisabled}>
        {isDisabled ? (
          <div className="h-100 pb-5 bg-secondary-lightest">
            <EmptyState
              title="There's a problem loading this page."
              description="Tab is disabled and you are not authorized to see the content of this tab"
              size="large"
            ></EmptyState>
          </div>
        ) : (
          <div>All</div>
        )}
      </Tab>
      <Tab label="Tab(Recommended)">
        <div>Tab(Recommended)</div>
      </Tab>
      <Tab label="Extras" disabled={true}>
        <div>Extras</div>
      </Tab>
    </Tabs>
  );
};

const customCode = `() => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  const isDisabled = true;
  return (
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6">
      <Tab label="All" icon="call_received" count={10} disabled={isDisabled}>
        {isDisabled ? (
          <div className="h-100 pb-5 bg-secondary-lightest">
            <EmptyState
              title="There's a problem loading this page."
              description="Tab is disabled and you are not authorized to see the content of this tab"
              size="large"
            ></EmptyState>
          </div>
        ) : (
          <div>All</div>
        )}
      </Tab>
      <Tab label="Tab(Recommended)">
        <div>Tab(Recommended)</div>
      </Tab>
      <Tab label="Extras" disabled={true}>
        <div>Extras</div>
      </Tab>
    </Tabs>
  );
}`;

export default {
  title: 'Components/Tabs/Disabled With Active',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
