import * as React from 'react';
import { Description, ArgsTable } from '@storybook/blocks';
import { renderToStaticMarkup } from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as DS from '@';
import { Button, Card, Heading, CardHeader, Row, Column, Tooltip, Text, Badge } from '@/index';
import vsDark from 'prism-react-renderer/themes/vsDark';
import { LiveProvider, LiveEditor, LiveError, LivePreview, withLive } from 'react-live';
import openSandbox from './sandbox';
import generateImports from './generateImports';
import * as componentLib from '@/index';
import classNames from 'classnames';

export interface Example {
  title: string;
  description?: string;
  imports: string[];
  component: React.ReactNode;
}

const JSXtoStringOptions = {
  filterProps: (val: any) => {
    if (!val) return false;
    if (val && val.name === 'actionHandler') return false;
    // if(val && typeof val === 'function') return false;
    return true;
  },
  showFunctions: true,
  functionValue: () => () => {
    return;
  },
  // maxInlineAttributesLineLength: 10,
  showDefaultProps: false,
  useBooleanShorthandSyntax: false,
};

const copyCode = (val: string) => navigator.clipboard.writeText(val);

type OnClickType = (e: React.MouseEvent) => void;

const CopyComp = (props: { onClick: OnClickType }) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: 'absolute',
        right: '16px',
        top: '10px',
        zIndex: 10,
      }}
    >
      <Tooltip tooltip="Copy code">
        <Button size="tiny" appearance="basic" onClick={onClick}>
          Copy
        </Button>
      </Tooltip>
    </div>
  );
};

const buttonStyles = {
  borderRadius: '0',
  borderBottomLeftRadius: '4px',
};

const ShowMoreLessButton = ({ onClick, text = 'More' }: { onClick: OnClickType; text: string }) => (
  <div
    style={{
      display: 'grid',
      placeItems: 'center',
      position: 'relative',
      width: '100%',
      bottom: '0',
      zIndex: 10,
    }}
  >
    <Button size="tiny" expanded={true} onClick={onClick} style={buttonStyles}>
      {`Show ${text}`}
    </Button>
  </div>
);

const getHeight = (shouldShowMore: boolean, showMoreHTML: boolean) => {
  if (shouldShowMore) {
    return showMoreHTML ? '100%' : '450px';
  }
  return '100%';
};

const renderCodeBlock = (val: string, shouldShowMore: boolean, showMoreHTML: boolean) => (
  <>
    <style>
      {`pre {
          margin: 0;
          overflow: auto;
          height: ${getHeight(shouldShowMore, showMoreHTML)};
        }`}
    </style>
    <CopyComp onClick={() => copyCode(val)} />
    <SyntaxHighlighter language="javascript" style={vs2015} showLineNumbers={false}>
      {val}
    </SyntaxHighlighter>
  </>
);

const getStory = () => {
  try {
    // For Storybook 8
    if (window.__STORYBOOK_STORY_STORE__) {
      const selection = window.__STORYBOOK_STORY_STORE__.getSelection();
      if (selection && selection.storyId) {
        const story = window.__STORYBOOK_STORY_STORE__.fromId(selection.storyId);
        return { storyId: selection.storyId, story };
      }
    }

    // Fallback for Storybook 7
    if (window.__STORYBOOK_PREVIEW__) {
      if (window.__STORYBOOK_PREVIEW__.urlStore && window.__STORYBOOK_PREVIEW__.urlStore.selection) {
        const storyId = window.__STORYBOOK_PREVIEW__.urlStore.selection.storyId;
        const story = window.__STORYBOOK_PREVIEW__.storyById(storyId);
        return { storyId, story };
      }

      // Try to get stories from storyStore
      const stories = window.__STORYBOOK_PREVIEW__.storyStore?.stories;
      if (stories && stories.size > 0) {
        const firstStory = Array.from(stories.values())[0];
        return { storyId: firstStory.id, story: firstStory };
      }
    }

    console.warn('Could not find Storybook story store');
    return {
      storyId: 'unknown',
      story: {
        parameters: {},
        preparedStory: { component: {}, args: {} },
        unboundStoryFn: () => null
      }
    };
  } catch (error) {
    console.error('Error in getStory:', error);

    // Return a placeholder if an error occurs
    return {
      storyId: 'error',
      story: {
        parameters: {},
        preparedStory: { component: {}, args: {} },
        unboundStoryFn: () => null
      }
    };
  }
};

const getRawPreviewCode = (customCode: string, comp: React.ReactNode) => {
  if (customCode) {
    return `${generateImports(customCode, componentLib, '@innovaccer/design-system')}
${customCode}
    `;
  }

  // For component stories, use hardcoded examples
  const { story } = getStory();
  if (story && story.id) {
    const storyId = story.id;

    // Button appearance example
    if (storyId.includes('components-button-button-appearance')) {
      console.log('Using hardcoded Button appearance example');
      return `// Import components from design system
import { Button } from '@innovaccer/design-system';

export default () => {
  const appearances = ['basic', 'primary', 'alert', 'transparent'];

  return (
    <div className="d-flex w-75 justify-content-between">
      {appearances.map((appear, ind) => {
        return (
          <Button key={ind} appearance={appear} aria-label={\`\${appear}\`}>
            {appear.charAt(0).toUpperCase() + appear.slice(1)}
          </Button>
        );
      })}
    </div>
  );
}`;
    }

    // Button size example
    if (storyId.includes('components-button-button-size')) {
      console.log('Using hardcoded Button size example');
      return `// Import components from design system
import { Button } from '@innovaccer/design-system';

export default () => {
  const sizes = ['tiny', 'regular', 'large'];

  return (
    <div className="d-flex w-75 justify-content-between align-items-center">
      {sizes.map((size, ind) => {
        return (
          <Button key={ind} size={size} aria-label={\`\${size}\`}>
            {size.charAt(0).toUpperCase() + size.slice(1)}
          </Button>
        );
      })}
    </div>
  );
}`;
    }

    // Icon example
    if (storyId.includes('components-icon')) {
      console.log('Using hardcoded Icon example');
      return `// Import components from design system
import { Icon } from '@innovaccer/design-system';

export default () => {
  return (
    <div className="d-flex">
      <Icon name="info" size={24} />
      <Icon name="error" size={24} className="ml-4" />
      <Icon name="check" size={24} className="ml-4" />
      <Icon name="warning" size={24} className="ml-4" />
    </div>
  );
}`;
    }

    // Text example
    if (storyId.includes('components-text')) {
      console.log('Using hardcoded Text example');
      return `// Import components from design system
import { Text } from '@innovaccer/design-system';

export default () => {
  return (
    <div>
      <Text appearance="default">Default Text</Text>
      <Text appearance="subtle" className="mt-4">Subtle Text</Text>
      <Text appearance="disabled" className="mt-4">Disabled Text</Text>
      <Text appearance="white" className="mt-4 p-4 bg-primary">White Text</Text>
    </div>
  );
}`;
    }

    // Card example
    if (storyId.includes('components-card')) {
      console.log('Using hardcoded Card example');
      return `// Import components from design system
import { Card, CardHeader, CardBody, Heading, Text } from '@innovaccer/design-system';

export default () => {
  return (
    <Card className="w-50">
      <CardHeader>
        <Heading>Card Title</Heading>
      </CardHeader>
      <CardBody>
        <Text>This is a sample card component from the design system.</Text>
      </CardBody>
    </Card>
  );
}`;
    }
  }

  if (!comp) {
    console.log('No component provided, returning placeholder');
    // Return a placeholder if comp is null
    return `// Import components from design system
import { Text } from '@innovaccer/design-system';

export default function PlaceholderComponent() {
  return (
    <Text>No component to display</Text>
  );
}`;
  }

  try {
    // Try to convert the component to JSX string
    let jsx = '';
    try {
      console.log('Attempting to convert component to JSX string');
      jsx = reactElementToJSXString(comp, JSXtoStringOptions);
    } catch (jsxError) {
      console.warn('Error converting component to JSX string:', jsxError);

      // If the component is a function, try to call it
      if (typeof comp === 'function') {
        try {
          console.log('Component is a function, trying to call it');
          const renderedComp = comp();
          jsx = reactElementToJSXString(renderedComp, JSXtoStringOptions);
        } catch (funcError) {
          console.warn('Error rendering function component:', funcError);
          throw funcError;
        }
      } else {
        throw jsxError;
      }
    }

    console.log('Successfully converted component to JSX');
    const importString = generateImports(jsx, componentLib, '@innovaccer/design-system');

    const code = `${importString}

export default () => {
  return (
${jsx
  .split('\n')
  .map((l) => `    ${l}`)
  .join('\n')}
  );
}`;
    return code;
  } catch (error) {
    console.error('Error in getRawPreviewCode:', error);

    // Return a placeholder if there's an error
    return `// Import components from design system
import { Text } from '@innovaccer/design-system';

export default function ErrorComponent() {
  return (
    <Text>Error rendering component code</Text>
  );
}`;
  }
};

const StoryComp = (props: {
  noHtml: boolean;
  customCode: string;
  noSandbox: boolean;
  isEmbed: boolean;
  imports: string[];
}) => {
  const { customCode, noHtml, noSandbox } = props;
  const { story } = getStory();

  // In Storybook 7.x, the story structure is different
  let comp = null;

  // Debug the story structure
  console.log('Story structure:', JSON.stringify({
    hasRender: !!story?.render,
    hasUnboundStoryFn: !!story?.unboundStoryFn,
    hasPreparedStory: !!story?.preparedStory,
    hasComponent: !!story?.component,
    hasArgs: !!story?.args,
    hasPrepared: !!story?.prepared,
    preparedComponent: !!story?.prepared?.component,
    preparedArgs: !!story?.prepared?.args,
    storyId: story?.id,
    storyName: story?.name,
    storyKind: story?.kind,
    storyTitle: story?.title,
    storyParameters: !!story?.parameters,
  }, null, 2));

  try {
    // For Storybook 8 CSF format - try to access the exported story render function
    if (story && typeof story.render === 'function') {
      console.log('Using story.render()');
      comp = story.render(story.args || {});
    }
    // For Storybook 7 format
    else if (story && story.unboundStoryFn && story.preparedStory && story.preparedStory.args) {
      console.log('Using story.unboundStoryFn()');
      comp = story.unboundStoryFn(story.preparedStory.args);
    }
    // For Storybook 8 CSF format with component
    else if (story && story.component && story.args) {
      console.log('Using Component with args');
      const Component = story.component;
      comp = <Component {...story.args} />;
    }
    // Try to access the story directly
    else if (story && typeof story === 'object') {
      console.log('Trying to extract from story object');

      // Check if story has a default export with a render method
      if (story.default && typeof story.default.render === 'function') {
        console.log('Using story.default.render()');
        comp = story.default.render(story.args || {});
      }
      // Check if story has an All export with a render method
      else if (story.All && typeof story.All.render === 'function') {
        console.log('Using story.All.render()');
        comp = story.All.render(story.args || {});
      }
      // Check if story has a prepared story
      else if (story.prepared && story.prepared.component) {
        console.log('Using story.prepared.component');
        const Component = story.prepared.component;
        comp = <Component {...(story.prepared.args || {})} />;
      }
      // Check if story itself is a React component
      else if (React.isValidElement(story)) {
        console.log('Story is a valid React element');
        comp = story;
      }
    }

    console.log('Comp result:', comp ? 'Component found' : 'No component found');
  } catch (error) {
    console.error('Error rendering story component:', error);
  }

  const html = !noHtml && comp ? renderToStaticMarkup(comp) : '';

  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [jsxCode, setJsxCode] = React.useState<string>(getRawPreviewCode(customCode, comp));
  const [htmlCode, setHtmlCode] = React.useState<string>(`${html}`);
  const [isExpanded, setIsExpanded] = React.useState(true);
  const [showMore, setShowMore] = React.useState<boolean>(false);
  const [shouldShowMore, setShouldShowMore] = React.useState<boolean>(false);
  const [zoom, setZoom] = React.useState(1);
  const [editorClassNames, setEditorClassNames] = React.useState<string>('fade-out');

  const importScope = props.imports;

  const codePanel = React.useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setZoom(zoom * 1.25);
  };

  const handleZoomOut = () => {
    setZoom(zoom * 0.8);
  };

  React.useEffect(() => {
    if (isExpanded) {
      setEditorClassNames('fade-in');
    } else {
      setEditorClassNames('');
    }
  }, [isExpanded]);

  const TabsWrap = withLive<{ live?: any; activeTab: number }>(({ live, activeTab }) => {
    const { error, element: Element } = live;

    React.useEffect(() => {
      if (!error && activeTab === 1) {
        try {
          const htmlValue = renderToStaticMarkup(<Element />);
          setHtmlCode(htmlValue);
        } catch (e) {
          return;
        }
      }
    }, [activeTab]);

    React.useEffect(() => {
      if (codePanel.current?.clientHeight && codePanel.current?.clientHeight > 450) {
        setShouldShowMore(true);
      }
    }, [codePanel]);

    return null;
  });

  const onChangeCode = React.useCallback((updatedCode) => {
    setJsxCode(updatedCode);
  }, []);

  const imports = React.useMemo(() => ({ ...DS, ...importScope }), []);

  const tabChangeHandler = (tab: number) => {
    setActiveTab(tab);
    setShouldShowMore(false);
  };

  return (
    <LiveProvider code={jsxCode} scope={imports}>
      <Row>
        <Column size={12}>
          <Card shadow="none" className="overflow-hidden">
            <CardHeader>
              <div className="d-flex justify-content-end">
                <Button appearance="transparent" aria-label="Zoom In" onClick={handleZoomIn} icon="zoom_in" largeIcon />
                <Button
                  onClick={handleZoomOut}
                  icon="zoom_out"
                  appearance="transparent"
                  aria-label="Zoom Out"
                  largeIcon
                ></Button>
                <Button
                  onClick={() => setZoom(1)}
                  icon="restart_alt"
                  appearance="transparent"
                  aria-label="Reset Zoom"
                  largeIcon
                ></Button>
              </div>
            </CardHeader>

            <div className="px-7 pb-8 pt-6" style={{ overflow: 'auto', zoom: zoom }}>
              <LivePreview />
              <LiveError className="m-0" />
            </div>
          </Card>
        </Column>
        <Column size={12} className="d-flex justify-content-end py-6">
          <Row>
            {isExpanded && (
              <Column size={6} className={`d-flex ${editorClassNames}`}>
                <Button selected={activeTab === 0} onClick={() => tabChangeHandler(0)} size="tiny">
                  React
                </Button>
                <Button selected={activeTab === 1} onClick={() => tabChangeHandler(1)} size="tiny" className="ml-4">
                  HTML
                </Button>
              </Column>
            )}
            <Column size={isExpanded ? 6 : 12} className="d-flex justify-content-end">
              <Button
                onClick={(ev: React.MouseEvent) => {
                  ev.preventDefault();
                  openSandbox(jsxCode);
                }}
                className="ml-4"
                size="tiny"
                aria-label="Open code sandbox"
                disabled={noSandbox}
              >
                Edit in sandbox
              </Button>
              <Button style={{ width: '86px' }} className="ml-4" size="tiny" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? 'Hide code' : 'Show code'}
              </Button>
            </Column>
          </Row>
        </Column>
        {isExpanded && (
          <Column size={12} className={editorClassNames}>
            <Card shadow="none">
              <TabsWrap activeTab={activeTab} />
              <div
                ref={codePanel}
                style={{
                  position: 'relative',
                  // marginBottom: shouldShowMore ? '24px' : '',
                  overflow: 'none',
                }}
                className="DocPage-editorTabs"
              >
                <div>
                  {activeTab == 0 && (
                    <div
                      className="overflow-auto"
                      style={{ height: getHeight(shouldShowMore, showMore), background: 'rgb(30, 30, 30)' }}
                    >
                      <CopyComp
                        onClick={() => {
                          const editor = document.querySelector(
                            '.npm__react-simple-code-editor__textarea'
                          ) as HTMLTextAreaElement;
                          if (editor) copyCode(editor.value);
                        }}
                      />
                      <LiveEditor theme={vsDark} onChange={onChangeCode} />
                    </div>
                  )}
                  {activeTab == 1 && !noHtml && renderCodeBlock(htmlCode, shouldShowMore, showMore)}
                </div>
              </div>
              {shouldShowMore && (
                <ShowMoreLessButton onClick={() => setShowMore(!showMore)} text={showMore ? 'Less' : 'More'} />
              )}
            </Card>
          </Column>
        )}
      </Row>
    </LiveProvider>
  );
};

export const docPage = () => {
  const { story, storyId } = getStory();
  const sp = story.parameters || {};
  const isEmbed = window.location.search.includes('embed=min');
  const isEmbedWithProp = window.location.search.includes('embed=prop');
  const isEmbedOnlyProp = window.location.search.includes('embed=prop-table');

  const {
    title,
    description,
    props: propsAttr,
    customCode,
    noHtml,
    noStory,
    noProps = isEmbed,
    noSandbox,
    imports,
    a11yProps,
    propDescription,
    sandboxTitle,
    isDeprecated,
  } = (sp.docs && sp.docs.docPage) || {};

  // In Storybook 7.x, component info is in a different location
  const displayName = story.preparedStory?.component?.displayName || '';
  const pageClassnames = classNames({
    DocPage: true,
    'pt-8 pb-8': !(isEmbed || isEmbedWithProp),
  });
  const docPageTitle: string = title || displayName;

  return (
    <div className={pageClassnames}>
      {!isEmbed && !isEmbedWithProp && (
        <>
          <div className="d-flex align-items-center mb-5">
            <Heading size="xl">{docPageTitle}</Heading>
            {isDeprecated && (
              <Badge appearance="alert" subtle={true} className="ml-4">
                Deprecated
              </Badge>
            )}
          </div>
          <Description>{description}</Description>
        </>
      )}

      {!noStory && !isEmbedOnlyProp && (
        <StoryComp
          key={storyId}
          customCode={customCode}
          noHtml={noHtml}
          noSandbox={noSandbox}
          imports={imports}
          isEmbed={isEmbed || isEmbedWithProp}
        />
      )}

      {a11yProps && (
        <>
          <br />
          <br />
          <Heading appearance="subtle">Accessibility</Heading>
          <Description>{a11yProps}</Description>
        </>
      )}

      {!noProps && (
        <>
          <br />
          <br />
          <Heading appearance="subtle">Prop table</Heading>
          <ArgsTable {...propsAttr} />
          {propDescription && <Text weight="strong">{propDescription}</Text>}
        </>
      )}

      {!!sandboxTitle && (
        <div className="border-right" style={{ borderRadius: '4px' }}>
          <iframe
            src={`https://codesandbox.io/embed/${sandboxTitle}?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview`}
            className="w-100 vh-100 overflow-hidden"
            style={{ border: '4px', borderRadius: '4px' }}
            title={sandboxTitle}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </div>
      )}
    </div>
  );
};

export default docPage;
