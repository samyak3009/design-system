import * as React from 'react';
import { Unstyled, useOf } from '@storybook/addon-docs/blocks';
import { renderToStaticMarkup } from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button, Card, CardHeader, Row, Column, Tooltip } from '@/index';
import { Runner } from 'react-runner';
import vsDark from 'prism-react-renderer/themes/vsDark';
import { LiveProvider, LiveEditor } from 'react-live';
import openSandbox from './sandbox';
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
    return true;
  },
  showFunctions: true,
  functionValue: () => () => {
    return;
  },
  showDefaultProps: false,
  useBooleanShorthandSyntax: false,
  displayName: (element: React.ReactNode): string => {
    if (React.isValidElement(element) && element.type) {
      const type = element.type as any;
      if (typeof type === 'string') {
        return type;
      }
      if (type.displayName) return type.displayName;
      if (type.name) return type.name;
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
    console.log('=== DEBUGGING CUSTOM CODE ===');
    console.log('Original custom code:', customCode);

    // For react-runner, we need to clean up the code and make it executable
    let cleanCode = customCode.trim();

    // Remove comment imports
    const lines = cleanCode.split('\n');
    const codeLines = lines.filter((line) => !line.trim().startsWith('// import'));
    cleanCode = codeLines.join('\n').trim();

    console.log('Clean code for react-runner:', cleanCode);

    // Return the code as-is for react-runner - it handles TypeScript natively
    return cleanCode;
  }

  if (storyArgs && Object.keys(storyArgs).length > 0) {
    console.log('Using storyArgs for JSX generation:', storyArgs);
    const componentName =
      comp && typeof comp === 'object' && 'type' in comp
        ? typeof (comp.type as any) === 'string'
          ? (comp.type as any) // Handle native HTML elements like 'div', 'span', etc.
          : (comp.type as any)?.displayName || (comp.type as any)?.name || 'Component'
        : 'Component';

    // If the root component is a native HTML element, use reactElementToJSXString
    // instead of trying to apply story args to it
    if (typeof (comp as any)?.type === 'string') {
      const jsx = reactElementToJSXString(comp, JSXtoStringOptions);
      return `() => ${jsx}`;
    }

    let children = storyArgs.children;
    if (!children && comp && typeof comp === 'object' && 'props' in comp) {
      children = (comp.props as any)?.children;
    }

    const formatValueForJSX = (value: any, indentLevel = 0): string => {
      const indent = '  '.repeat(indentLevel);
      const nextIndent = '  '.repeat(indentLevel + 1);

      if (typeof value === 'string') {
        return `"${value}"`;
      } else if (typeof value === 'boolean') {
        return `{${value}}`;
      } else if (typeof value === 'number') {
        return `{${value}}`;
      } else if (React.isValidElement(value)) {
        return `{${reactElementToJSXString(value, JSXtoStringOptions)}}`;
      } else if (Array.isArray(value)) {
        if (value.length === 0) return '{[]}';

        const formattedItems = value.map((item) => {
          if (typeof item === 'object' && item !== null) {
            if (React.isValidElement(item)) {
              return `${nextIndent}${reactElementToJSXString(item, JSXtoStringOptions)}`;
            } else {
              const objContent = Object.entries(item)
                .map(([k, v]) => `${nextIndent}  ${k}: ${formatValueForJSX(v).replace(/^{|}$/g, '')}`)
                .join(',\n');
              return `${nextIndent}{\n${objContent}\n${nextIndent}}`;
            }
          } else {
            return `${nextIndent}${formatValueForJSX(item).replace(/^{|}$/g, '')}`;
          }
        });

        return `{[\n${formattedItems.join(',\n')}\n${indent}]}`;
      } else if (typeof value === 'object' && value !== null) {
        const objContent = Object.entries(value)
          .map(([k, v]) => `${nextIndent}${k}: ${formatValueForJSX(v, indentLevel + 1).replace(/^{|}$/g, '')}`)
          .join(',\n');
        return `{{\n${objContent}\n${indent}}}`;
      } else {
        return `{${String(value)}}`;
      }
    };

    const propsEntries = Object.entries(storyArgs).filter(([key]) => key !== 'children');

    let propsString = '';
    if (propsEntries.length > 0) {
      const shouldUseMultiline = propsEntries.some(([, value]) => {
        return Array.isArray(value) || (typeof value === 'object' && value !== null);
      });

      if (shouldUseMultiline) {
        const formattedProps = propsEntries.map(([key, value]) => {
          const formattedValue = formatValueForJSX(value, 1);
          return `  ${key}=${formattedValue}`;
        });
        propsString = `\n${formattedProps.join('\n')}\n`;
      } else {
        propsString =
          ' ' +
          propsEntries
            .map(([key, value]) => {
              return `${key}=${formatValueForJSX(value)}`;
            })
            .join(' ');
      }
    }

    let jsxWithProps;
    if (children) {
      let childrenString;

      if (typeof children === 'string') {
        childrenString = children;
      } else if (Array.isArray(children)) {
        childrenString = children
          .map((child) => {
            if (typeof child === 'string') {
              return child;
            } else if (React.isValidElement(child)) {
              const jsxString = reactElementToJSXString(child, JSXtoStringOptions);
              return jsxString;
            } else {
              return String(child);
            }
          })
          .join('\n    ');
      } else if (React.isValidElement(children)) {
        const jsxString = reactElementToJSXString(children, JSXtoStringOptions);
        childrenString = jsxString;
      } else {
        childrenString = String(children);
      }

      jsxWithProps = `<${componentName}${propsString}>
  ${childrenString}
</${componentName}>`;
    } else {
      if (propsString.includes('\n')) {
        jsxWithProps = `<${componentName}${propsString}/>`;
      } else {
        jsxWithProps = `<${componentName}${propsString} />`;
      }
    }

    return `() => ${jsxWithProps}`;
  }

  const jsx = reactElementToJSXString(comp, JSXtoStringOptions);
  return `() => ${jsx}`;
};

// Custom Preview Component using react-runner
const CustomPreview = ({ code, zoom, scope }: { code: string; zoom: number; scope: any }) => {
  const [error, setError] = React.useState<string | null>(null);

  // Create a hash of the code to force re-rendering when code changes
  const codeHash = React.useMemo(() => {
    return btoa(code).slice(0, 10); // Simple hash for key
  }, [code]);

  return (
    <div style={{ zoom: zoom, padding: '20px' }}>
      {error && (
        <div
          style={{
            background: '#ffebee',
            border: '1px solid #f44336',
            borderRadius: '4px',
            padding: '12px',
            marginBottom: '16px',
            color: '#c62828',
            fontFamily: 'monospace',
            fontSize: '14px',
            whiteSpace: 'pre-wrap',
          }}
        >
          <strong>Error:</strong>
          <br />
          {error}
        </div>
      )}
      <Runner
        key={codeHash}
        code={code}
        scope={scope}
        onRendered={(renderError) => {
          if (renderError) {
            console.error('Runner error:', renderError);
            setError(renderError.toString());
          } else {
            setError(null);
          }
        }}
      />
    </div>
  );
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
  const comp = story.originalStoryFn(storyArgs, story);
  const html = !noHtml ? renderToStaticMarkup(comp) : '';

  // Initialize JSX code with error handling
  const getInitialJsxCode = () => {
    try {
      return getRawPreviewCode(customCode, comp, storyArgs);
    } catch (error) {
      console.error('Error generating code:', error);
      return '// Error generating code - check console for details';
    }
  };

  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [jsxCode, setJsxCode] = React.useState<string>(getInitialJsxCode());
  const [htmlCode, setHtmlCode] = React.useState<string>(`${html}`);
  const [isExpanded, setIsExpanded] = React.useState(true);
  const [showMore, setShowMore] = React.useState<boolean>(false);
  const [shouldShowMore, setShouldShowMore] = React.useState<boolean>(false);
  const [zoom, setZoom] = React.useState(1);
  const [editorClassNames, setEditorClassNames] = React.useState<string>('fade-out');

  const codePanel = React.useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setZoom(zoom * 1.25);
  };

  const handleZoomOut = () => {
    setZoom(zoom * 0.8);
  };

  const onCodeChange = React.useCallback((updatedCode: string) => {
    setJsxCode(updatedCode);
  }, []);

  // Update HTML code when switching to HTML tab
  React.useEffect(() => {
    if (activeTab === 1 && !noHtml) {
      try {
        setHtmlCode(html);
      } catch (e) {
        console.error('Error generating HTML:', e);
        setHtmlCode(`<!-- Error generating HTML: ${e} -->`);
      }
    }
  }, [activeTab, html, noHtml]);

  React.useEffect(() => {
    if (isExpanded) {
      setEditorClassNames('fade-in');
    } else {
      setEditorClassNames('');
    }
  }, [isExpanded]);

  React.useEffect(() => {
    if (codePanel.current?.clientHeight && codePanel.current?.clientHeight > 450) {
      setShouldShowMore(true);
    }
  }, [codePanel]);

  const tabChangeHandler = (tab: number) => {
    setActiveTab(tab);
    setShouldShowMore(false);
  };

  // Create scope for react-runner
  const scope = React.useMemo(() => {
    const importScope = props.imports || [];
    return {
      React,
      classNames,
      ...componentLib,
      ...importScope.reduce((acc, imp) => {
        acc[imp] = componentLib[imp as keyof typeof componentLib];
        return acc;
      }, {} as any),
    };
  }, [props.imports]);

  return (
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
              />
              <Button
                onClick={() => setZoom(1)}
                icon="restart_alt"
                appearance="transparent"
                aria-label="Reset Zoom"
                largeIcon
              />
            </div>
          </CardHeader>

          <div className="px-7 pb-8 pt-6" style={{ overflow: 'auto' }}>
            <CustomPreview code={jsxCode} zoom={zoom} scope={scope} />
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
            <div
              ref={codePanel}
              style={{
                position: 'relative',
                overflow: 'none',
              }}
              className="DocPage-editorTabs"
            >
              <div>
                {activeTab === 0 && (
                  <div
                    className="overflow-auto"
                    style={{ height: getHeight(shouldShowMore, showMore), background: 'rgb(30, 30, 30)' }}
                  >
                    <CopyComp onClick={() => copyCode(jsxCode)} />
                    <LiveProvider code={jsxCode} scope={scope}>
                      <LiveEditor theme={vsDark} onChange={onCodeChange} />
                    </LiveProvider>
                  </div>
                )}
                {activeTab === 1 && !noHtml && renderCodeBlock(htmlCode, shouldShowMore, showMore)}
              </div>
            </div>
            {shouldShowMore && (
              <ShowMoreLessButton onClick={() => setShowMore(!showMore)} text={showMore ? 'Less' : 'More'} />
            )}
          </Card>
        </Column>
      )}
    </Row>
  );
};

export const RenderBlock = ({ of }: any) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta']);
  let story;
  switch (resolvedOf.type) {
    case 'story': {
      story = resolvedOf.story;
      break;
    }
    case 'meta': {
      story = resolvedOf.preparedMeta;
      break;
    }
  }

  const sp = story.parameters;
  const { customCode, noHtml, noSandbox, imports, sandboxTitle } = sp.docs.docPage || {};
  const pageClassnames = classNames({
    DocPage: true,
  });

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
