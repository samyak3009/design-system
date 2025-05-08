#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Fixes the story files to make them compatible with Storybook 8.x and TSX
 * @param {string} filePath Path to the story file
 */
function fixStoryFile(filePath) {
  console.log(`Fixing: ${filePath}`);

  try {
    // Read the content of the file
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;

    // Check if this is a TSX file
    const isTsx = filePath.endsWith('.tsx');

    // If it's a JSX/JS file, we'll check if it needs to be converted to CSF 3.0 format
    if (!isTsx && (filePath.endsWith('.jsx') || filePath.endsWith('.js'))) {
      // Check if it's using the old CSF format
      if (fixedContent.includes('export const') && fixedContent.includes('export default {')) {
        console.log(`Converting ${filePath} to CSF 3.0 format`);
        fixedContent = convertToCSF3(fixedContent, filePath);
      }
      // Write the fixed content back to the file
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent);
        console.log(`Fixed ${filePath}`);
      }
      return;
    }

    // Special case for problematic files that need complete rewriting
    if (filePath.includes('CustomTrigger.story.tsx') ||
        filePath.includes('AppearanceTitle.story.tsx') ||
        filePath.includes('Appearance.story.tsx') && fixedContent.includes('appearances: "["')) {
      fixedContent = createReplacementStory(filePath);
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Completely rewrote ${filePath} with a new template`);
      return;
    }

    // Fix for unclosed self-closing tags
    const selfClosingTags = ['Icon', 'input', 'img', 'br', 'hr'];
    selfClosingTags.forEach(tag => {
      const regex = new RegExp(`<(${tag})([^>]*?)>(?!\\s*<\\/${tag}>)`, 'g');
      fixedContent = fixedContent.replace(regex, '<$1$2 />');
    });

    // Fix TypeScript imports in JSX files
    if (filePath.endsWith('.jsx') && fixedContent.includes('import type {')) {
      fixedContent = fixedContent.replace(/import type \{ Meta, StoryObj \} from "@storybook\/react";/g,
        '// @ts-ignore\nimport { Meta, StoryObj } from "@storybook/react";');
    }

    // Fix lowercase component imports
    const componentNames = ['avatar', 'button', 'collapsible', 'dropdown', 'heading', 'icon',
      'message', 'spinner', 'subheading', 'text', 'verticalNav'];

    componentNames.forEach(name => {
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
      const regex = new RegExp(`import { ${name} } from "@/index"`, 'g');
      fixedContent = fixedContent.replace(regex, `import { ${capitalizedName} } from "@/index"`);
    });

    // Fix broken JSX in args.children
    if (fixedContent.includes('args: {')) {
      // Fix appearances array that's a string
      if (fixedContent.includes('appearances: "[')) {
        fixedContent = fixedContent.replace(/appearances:\s*"\[([^"]*)\]"/g, (match, p1) => {
          // Extract array items and create a proper array
          const items = p1.split(',').map(item => item.trim());
          return `appearances: [${items.map(item => `"${item}"`).join(', ')}]`;
        });
      }

      // Fix duplicate children properties
      if ((fixedContent.match(/children:\s*\(/g) || []).length > 1) {
        // Find the first children property
        const firstChildrenStart = fixedContent.indexOf('children: (');
        if (firstChildrenStart !== -1) {
          // Find the JSX fragment opening
          const jsxStart = fixedContent.indexOf('<>', firstChildrenStart);

          // Find the matching closing fragment
          let depth = 1;
          let jsxEnd = -1;

          for (let i = jsxStart + 2; i < fixedContent.length; i++) {
            if (fixedContent.substring(i, i + 2) === '<>') {
              depth++;
            } else if (fixedContent.substring(i, i + 3) === '</>') {
              depth--;
              if (depth === 0) {
                jsxEnd = i + 3;
                break;
              }
            }
          }

          if (jsxEnd !== -1) {
            // Find the end of the args object
            let braceCount = 1;
            let argsEnd = -1;

            for (let i = jsxEnd; i < fixedContent.length; i++) {
              if (fixedContent[i] === '{') braceCount++;
              if (fixedContent[i] === '}') {
                braceCount--;
                if (braceCount === 0) {
                  argsEnd = i + 1;
                  break;
                }
              }
            }

            if (argsEnd !== -1) {
              // Extract the args object content
              const argsContent = fixedContent.substring(firstChildrenStart, argsEnd);

              // Remove duplicate children properties
              const fixedArgs = argsContent.replace(/children:\s*\(\s*<>[\s\S]*?<\/>\s*\)\s*,?/g, (match, offset) => {
                // Keep only the first occurrence
                return offset === 0 ? match : '';
              });

              // Replace the original args content with the fixed one
              fixedContent = fixedContent.substring(0, firstChildrenStart) + fixedArgs + fixedContent.substring(argsEnd);
            }
          }
        }
      }

      // Fix unterminated strings in JSX attributes
      fixedContent = fixedContent.replace(/(\w+)="([^"\n]*?)(\n|$)/g, '$1="$2"$3');

      // Fix unclosed tags in JSX
      const commonTags = ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button', 'a', 'label', 'Text', 'Heading'];
      commonTags.forEach(tag => {
        const regex = new RegExp(`<(${tag})([^>]*?)>([^<]*?)(?=\\n|<(?!\\/${tag}>))`, 'g');
        fixedContent = fixedContent.replace(regex, '<$1$2>$3</$1>');
      });
    }

    // Fix broken JSX structure with too many closing tags
    fixedContent = fixedContent.replace(/<\/div><\/div><\/div><\/div><\/div>/g, '</div>');

    // Fix broken quotes in JSX
    fixedContent = fixedContent.replace(/(\w+):",/g, '$1",');

    // Fix broken className attributes
    fixedContent = fixedContent.replace(/className: "([^"]*?)"/g, 'className: "$1"');

    // Write the fixed content back to the file if changes were made
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error);
  }
}

/**
 * Converts old CSF format to CSF 3.0
 * @param {string} content The file content
 * @param {string} filePath The file path
 * @returns {string} The converted content
 */
function convertToCSF3(content, filePath) {
  // Extract the component name from the file path
  const componentName = path.basename(path.dirname(path.dirname(filePath)));

  // Extract the story export
  const storyMatch = content.match(/export const (\w+) = \(\) => {([\s\S]*?)};/);
  if (!storyMatch) return content;

  const storyName = storyMatch[1];
  const storyBody = storyMatch[2];

  // Extract the return statement
  const returnMatch = storyBody.match(/return \(([\s\S]*?)\);/);
  if (!returnMatch) return content;

  const jsxContent = returnMatch[1];

  // Extract the default export
  const defaultExportMatch = content.match(/export default {([\s\S]*?)};/);
  if (!defaultExportMatch) return content;

  const defaultExportContent = defaultExportMatch[1];

  // Extract the title
  const titleMatch = defaultExportContent.match(/title: ['"]([^'"]*)['"]/);
  const title = titleMatch ? titleMatch[1] : `Components/${componentName}`;

  // Create the new CSF 3.0 format
  const isJsx = filePath.endsWith('.jsx');

  return `import React from 'react';
${isJsx ? '// @ts-ignore\nimport { Meta, StoryObj } from "@storybook/react";' : 'import type { Meta, StoryObj } from "@storybook/react";'}
import { ${componentName} } from "@/index";

const meta = {
  title: "${title}",
  component: ${componentName},
  parameters: {
    layout: "centered",
  },
}${isJsx ? '' : ' satisfies Meta<typeof ${componentName}>'};

export default meta;
type Story = StoryObj<typeof meta>;

export const ${storyName.charAt(0).toUpperCase() + storyName.slice(1)}: Story = {
  args: {
    children: (
      <>
        ${jsxContent}
      </>
    )
  },
};
`;
}

/**
 * Creates a replacement story for problematic files
 * @param {string} filePath The file path
 * @returns {string} The new story content
 */
function createReplacementStory(filePath) {
  // Extract component name from file path
  const pathParts = filePath.split('/');
  const componentIndex = pathParts.findIndex(part => part === 'components') + 2;
  const componentName = pathParts[componentIndex];

  // Extract story name from file name
  const fileName = path.basename(filePath, path.extname(filePath));
  const storyName = fileName.split('.')[0];

  // Create a title based on the file path
  const titleParts = filePath.split('/');
  const storyIndex = titleParts.findIndex(part => part.includes('__stories__'));
  const titlePath = titleParts.slice(componentIndex, storyIndex).join('/');

  // Special case for appearance stories
  if (filePath.includes('Appearance.story.tsx')) {
    return `import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { ${componentName} } from "@/index";

const meta = {
  title: "Components/${titlePath}/${storyName}",
  component: ${componentName},
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ${storyName}: Story = {
  args: {
    appearance: "default",
    children: "This is a ${componentName} component"
  },
  render: (args) => {
    const appearances = ["default", "subtle", "white", "primary"];

    return (
      <div className="d-flex flex-column">
        {appearances.map((appearance, index) => (
          <div key={index} className="mb-4">
            <div className={appearance === "white" ? "bg-dark p-4" : ""}>
              <${componentName} {...args} appearance={appearance}>
                {appearance.charAt(0).toUpperCase() + appearance.slice(1)} ${componentName}
              </${componentName}>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
`;
  }

  // Default template for other stories
  return `import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { ${componentName} } from "@/index";

const meta = {
  title: "Components/${titlePath}/${storyName}",
  component: ${componentName},
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ${storyName}: Story = {
  args: {
    children: "This is a ${componentName} component"
  }
};
`;
}

// Find all story files
const storyFiles = glob.sync('core/components/**/*.story.@(js|jsx|ts|tsx)');

if (storyFiles.length === 0) {
  console.log('No story files found.');
} else {
  console.log(`Found ${storyFiles.length} story files.`);

  // Process each file
  storyFiles.forEach((filePath) => {
    fixStoryFile(filePath);
  });

  console.log('Fix completed!');
}
