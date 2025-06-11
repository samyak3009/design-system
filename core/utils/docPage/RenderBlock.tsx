import * as React from 'react';
import { Unstyled, useOf } from '@storybook/addon-docs/blocks';
import { renderToStaticMarkup } from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as DS from '@';
import { Button, Card, CardHeader, Row, Column, Tooltip } from '@/index';
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
  displayName: (element: React.ReactNode): string => {
    // Try to get a meaningful component name for subcomponents
    if (React.isValidElement(element) && element.type) {
      const type = element.type as any;

      // If it's a native HTML element (string type), don't modify the display name
      if (typeof type === 'string') {
        return type; // Return the original HTML tag name (div, span, p, etc.)
      }
      // Only apply custom naming logic to React components (function/object types)
      // Check for displayName first, then name, then try to extract from function toString
      if (type.displayName) return type.displayName;
      if (type.name) return type.name;
      // For anonymous functions, try to extract name from function string
      if (typeof type === 'function') {
        const funcStr = type.toString();
        const match = funcStr.match(/function\s+([^(]+)/);
        if (match) return match[1];
      }
    }
    return 'Component';
  },
  tabStop: 2,
  maxInlineAttributesLineLength: 60,
  sortProps: false,
  showChildren: true,
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

// Helper function to check if a string represents an object
const isObjectString = (str: string): boolean => {
  if (typeof str !== 'string') return false;
  const trimmed = str.trim();
  return (trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'));
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

const getRawPreviewCode = (customCode: string, comp: React.ReactNode, storyArgs?: any) => {
  if (customCode) {
    return `${generateImports(customCode, componentLib, '@innovaccer/design-system')}
${customCode}
    `;
  }

  // If we have story args, try to create a more accurate JSX representation
  if (storyArgs && Object.keys(storyArgs).length > 0) {
    console.log('Using storyArgs for JSX generation:', storyArgs);
    // Try to extract component name from the React element
    const componentName =
      comp && typeof comp === 'object' && 'type' in comp
        ? (comp.type as any)?.displayName || (comp.type as any)?.name || 'Component'
        : 'Component';

    // Extract children from story args or React element
    let children = storyArgs.children;
    if (!children && comp && typeof comp === 'object' && 'props' in comp) {
      children = (comp.props as any)?.children;
    }
    console.log('Detected children:', children);

    // Generate props string from storyArgs (excluding children)
    const propsString = Object.entries(storyArgs)
      .filter(([key]) => key !== 'children') // Exclude children from props
      .map(([key, value]) => {
        if (typeof value === 'string') {
          return `${key}="${value}"`;
        } else if (typeof value === 'boolean') {
          return value ? key : `${key}={false}`;
        } else if (typeof value === 'number') {
          return `${key}={${value}}`;
        } else if (typeof value === 'object') {
          return `${key}={${JSON.stringify(value)}}`;
        } else {
          return `${key}={${String(value)}}`;
        }
      })
      .join(' ');

    // Generate JSX with or without children
    let jsxWithProps;
    if (children) {
      let childrenString;

      if (typeof children === 'string') {
        childrenString = children;
      } else if (Array.isArray(children)) {
        // Handle array of children (can be mixed strings and React components)
        childrenString = children
          .map((child, index) => {
            if (typeof child === 'string') {
              return child;
            } else if (React.isValidElement(child)) {
              // Convert React component to JSX string
              const jsxString = reactElementToJSXString(child, JSXtoStringOptions);
              console.log(`JSX string for child ${index}:`, jsxString);
              return jsxString;
            } else {
              return String(child);
            }
          })
          .join('\n    ');
      } else if (React.isValidElement(children)) {
        // Single React component - convert to JSX string
        const jsxString = reactElementToJSXString(children, JSXtoStringOptions);
        console.log('JSX string for single child:', jsxString);
        childrenString = jsxString;
      } else {
        // Fallback for other types
        console.log('Using fallback for children:', children);
        childrenString = String(children);
      }

      jsxWithProps = `<${componentName}${propsString ? ' ' + propsString : ''}>
    ${childrenString}
  </${componentName}>`;
    } else {
      jsxWithProps = `<${componentName}${propsString ? ' ' + propsString : ''} />`;
    }

    const importString = generateImports(jsxWithProps, componentLib, '@innovaccer/design-system');

    const code = `
  ${importString}
  () => {
    return(
      ${jsxWithProps}
    );
  }
  `;
    return code;
  }

  const jsx = reactElementToJSXString(comp, JSXtoStringOptions);
  const importString = generateImports(jsx, componentLib, '@innovaccer/design-system');

  const code = `
${importString}
() => {
  return(
${jsx
  .split('\n')
  .map((l) => `    ${l}`)
  .join('\n')}
  );
}
`;
  return code;
};

const StoryComp = (props: {
  noHtml: boolean;
  customCode: string;
  noSandbox: boolean;
  imports: string[];
  story: any;
}) => {
  const { customCode, noHtml, noSandbox, story } = props;

  const storyArgs = story.moduleExport.args || {};
  console.log('storyArgs', storyArgs);
  const comp = story.originalStoryFn(storyArgs, story);
  console.log('comp', comp);
  const html = !noHtml ? renderToStaticMarkup(comp) : '';

  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [jsxCode, setJsxCode] = React.useState<string>(getRawPreviewCode(customCode, comp, storyArgs));
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

export const RenderBlock = ({ of }: any) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta']);
  let story;
  switch (resolvedOf.type) {
    case 'story': {
      console.log('resolvedOf.story', resolvedOf.story);
      story = resolvedOf.story;
      break;
    }
    case 'meta': {
      console.log('resolvedOf.meta', resolvedOf.preparedMeta);
      story = resolvedOf.preparedMeta;
      break;
    }
  }
  console.log('story', story);
  const sp = story.parameters;

  const { customCode, noHtml, noSandbox, imports, sandboxTitle } = sp.docs.docPage || {};
  const pageClassnames = classNames({
    DocPage: true,
  });

  // Get the fallback source, but only if it's not an object string
  const fallbackSource =
    sp.docs.source.originalSource && !isObjectString(sp.docs.source.originalSource)
      ? sp.docs.source.originalSource
      : undefined;

  return (
    <Unstyled>
      <div className={pageClassnames}>
        <StoryComp
          story={story}
          key={story.id}
          customCode={customCode || fallbackSource}
          noHtml={noHtml}
          noSandbox={noSandbox}
          imports={imports}
        />
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
    </Unstyled>
  );
};

export default RenderBlock;
