#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Fixes the generated TSX story files that have unterminated strings
 * @param {string} filePath Path to the story file
 */
function fixStoryFile(filePath) {
  console.log(`Fixing: ${filePath}`);

  try {
    // Read the content of the file
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;

    // Fix for CustomTrigger.story.tsx specifically
    if (filePath.endsWith('CustomTrigger.story.tsx')) {
      // Create a new simpler version of the file
      fixedContent = `import type { Meta, StoryObj } from "@storybook/react";
import { VerticalNav } from "@/index";

const meta = {
  title: "Components/VerticalNav/VerticalNav/Custom Trigger",
  component: VerticalNav,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof VerticalNav>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock data for the VerticalNav component
const mockMenus = [
  { 
    label: 'Home',
    icon: 'home'
  },
  {
    label: 'Settings',
    icon: 'settings'
  }
];

export const CustomTrigger: Story = {
  args: {
    expanded: false,
    menus: mockMenus,
    autoCollapse: true,
    showTooltip: true
  }
};`;

      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed ${filePath} with custom template`);
      return;
    }

    // Fix for unclosed self-closing tags like <Icon ...>
    if (
      fixedContent.includes('<Icon ') ||
      fixedContent.includes('<input ') ||
      fixedContent.includes('<img ') ||
      fixedContent.includes('<br ')
    ) {
      // Match tags that should be self-closing but aren't
      const selfClosingTagRegex = /<(Icon|input|img|br)([^>]*?)>(?!\s*<\/\1>)/g;
      fixedContent = fixedContent.replace(selfClosingTagRegex, '<$1$2 />');
    }

    // More comprehensive fix for JSX attribute strings within children
    if (fixedContent.includes('children: (') && fixedContent.includes('<>')) {
      // Find the JSX content area
      const childrenStart = fixedContent.indexOf('children: (');
      if (childrenStart !== -1) {
        const jsxStart = fixedContent.indexOf('<>', childrenStart);
        let endBracketCount = 0;
        let jsxEnd = -1;

        // Find the end of JSX block
        for (let i = jsxStart; i < fixedContent.length; i++) {
          if (fixedContent.substring(i, i + 2) === '</' && fixedContent.substring(i, i + 3) === '</>') {
            endBracketCount++;
            if (endBracketCount === 1) {
              jsxEnd = i + 3;
              break;
            }
          }
        }

        if (jsxEnd !== -1) {
          // Extract the problematic JSX content
          const jsxContent = fixedContent.substring(jsxStart, jsxEnd);

          // Look for unterminated strings in attributes
          let fixedJsx = jsxContent;

          // Fix className attributes
          fixedJsx = fixedJsx.replace(/className: "([^"\n]*?)(\n|,|\s*(?=<|\)))/g, 'className: "$1"$2');

          // Fix other attributes with unterminated strings
          fixedJsx = fixedJsx.replace(/([\w]+): "([^"\n]*?)(\n|,|\s*(?=<|\)))/g, '$1: "$2"$3');

          // Fix Label or other component content with unterminated strings
          fixedJsx = fixedJsx.replace(/<([\w]+)>([^<]*?)(?=\n|,|\s*<)/g, '<$1>$2</$1>');

          // Replace the original content with fixed content
          fixedContent = fixedContent.substring(0, jsxStart) + fixedJsx + fixedContent.substring(jsxEnd);
        }
      }
    }

    // Fix JSX structure issues - unclosed div and other tags
    const openingTagRegex =
      /<(div|span|p|h[1-6]|ul|li|button|a|section|header|footer|label|form)([^>]*?)>(?![^<]*?<\/\1>)/g;
    let match;
    let matches = [];

    // Find all unclosed tags
    while ((match = openingTagRegex.exec(fixedContent)) !== null) {
      matches.push({
        tag: match[1],
        index: match.index,
        fullMatch: match[0],
      });
    }

    // Fix them in reverse order to avoid index shifting issues
    for (let i = matches.length - 1; i >= 0; i--) {
      const { tag, index, fullMatch } = matches[i];

      // Find where to insert the closing tag
      let insertIndex = index + fullMatch.length;
      let depth = 1;
      let maxSearch = 300; // Limit search distance to avoid infinite loops

      for (let j = insertIndex; j < Math.min(insertIndex + maxSearch, fixedContent.length); j++) {
        const char = fixedContent[j];
        if (char === '<') {
          if (fixedContent.substring(j, j + 2) === '</') {
            depth--;
            if (depth === 0) {
              // Found the right nesting level, insert before this closing tag
              insertIndex = j;
              break;
            }
          } else if (j < fixedContent.length - 1 && fixedContent[j + 1] !== '/') {
            depth++;
          }
        }
      }

      // Insert closing tag at identified position
      fixedContent = fixedContent.substring(0, insertIndex) + `</${tag}>` + fixedContent.substring(insertIndex);
    }

    // Check if the file has basic issues with args
    if (fixedContent.includes('args: {')) {
      // Fix children property if it exists and has unterminated string
      if (fixedContent.includes("children: '") || fixedContent.includes('children: "')) {
        console.log(`Found 'children' issue in ${filePath}`);

        // Extract the broken children string
        const childrenMatch = fixedContent.match(/children:\s*['"]([^'"]*)/);

        if (childrenMatch) {
          // Find the matching closing brace for this property
          const startIndex =
            fixedContent.indexOf("children: '") !== -1
              ? fixedContent.indexOf("children: '")
              : fixedContent.indexOf('children: "');

          let braceCount = 0;
          let endIndex = startIndex;

          // Find where the actual JSX content ends (before the closing args object)
          for (let i = startIndex; i < fixedContent.length; i++) {
            if (fixedContent[i] === '{') braceCount++;
            if (fixedContent[i] === '}') {
              braceCount--;
              if (braceCount < 0) {
                endIndex = i;
                break;
              }
            }
          }

          // Extract the content to be fixed
          const contentToFix = fixedContent.substring(startIndex, endIndex);

          // Extract the JSX part from the string
          const jsxContent = contentToFix.replace(/children:\s*['"]/, '').replace(/['"]\s*,?\s*$/, '');

          // Create the fixed replacement with proper JSX syntax
          const fixedPart = `children: (\n      <>\n        ${jsxContent}\n      </>\n    )`;

          // Replace the broken part with the fixed part
          fixedContent = fixedContent.substring(0, startIndex) + fixedPart + fixedContent.substring(endIndex);
        }
      }

      // Fix data property if it exists and has unterminated string
      if (fixedContent.includes("data: '[") || fixedContent.includes("data: '{")) {
        console.log(`Found 'data' issue in ${filePath}`);

        // Replace invalid string data with a placeholder array or object
        if (fixedContent.includes("data: '[")) {
          fixedContent = fixedContent.replace(/data:\s*'\[.*?'\s*,/s, 'data: [],');
        } else if (fixedContent.includes("data: '{")) {
          fixedContent = fixedContent.replace(/data:\s*'\{.*?'\s*,/s, 'data: {},');
        }
      }

      // Fix any other properties that might have unterminated strings with JSX
      const propMatches = fixedContent.matchAll(/(\w+):\s*['"]</g);
      for (const match of propMatches) {
        const propName = match[1];
        if (propName !== 'children' && propName !== 'data') {
          console.log(`Found '${propName}' issue in ${filePath}`);

          // Find the property value and replace it with a proper JSX expression
          const propStart =
            fixedContent.indexOf(`${propName}: '`) !== -1
              ? fixedContent.indexOf(`${propName}: '`)
              : fixedContent.indexOf(`${propName}: "`);

          let braceCount = 0;
          let propEnd = propStart;

          // Find where the property value ends
          for (let i = propStart; i < fixedContent.length; i++) {
            if (fixedContent[i] === '{') braceCount++;
            if (fixedContent[i] === '}') {
              braceCount--;
              if (braceCount < 0) {
                propEnd = i;
                break;
              }
            }
          }

          // Extract the property content to be fixed
          const propToFix = fixedContent.substring(propStart, propEnd);

          // Extract the JSX part from the string
          const jsxContent = propToFix
            .replace(new RegExp(`${propName}:\\s*['"](.*?)`, 's'), '$1')
            .replace(/['"]\s*,?\s*$/, '');

          // Create the fixed replacement with proper JSX syntax
          const fixedProp = `${propName}: (\n      <>\n        ${jsxContent}\n      </>\n    )`;

          // Replace the broken part with the fixed part
          fixedContent = fixedContent.substring(0, propStart) + fixedProp + fixedContent.substring(propEnd);
        }
      }
    }

    // Additional fix for specific unterminated attribute strings
    fixedContent = fixedContent.replace(/(<[^>]+\s+[\w]+)="([^"\n]+)(\n|\s*>|\s+\w+=)/g, '$1="$2"$3');

    // Fix unclosed JSX tags
    const lines = fixedContent.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const matches = line.match(/<(\w+)>([^<]*?)$/);
      if (matches) {
        const tagName = matches[1];
        const content = matches[2];
        lines[i] = line.replace(/<(\w+)>([^<]*?)$/, `<$1>${content}</$1>`);
      }
    }
    fixedContent = lines.join('\n');

    // Fix specific pattern in CustomTrigger.story.tsx
    if (filePath.includes('CustomTrigger.story.tsx') || filePath.includes('verticalNav') || filePath.includes('Icon')) {
      // Special case for Icon tags that aren't properly closed
      fixedContent = fixedContent.replace(/<Icon([^>]*?)>(\s*)<\/>/g, '<Icon$1 />$2</>');

      // Fix any unclosed div tags that followed by Icon
      fixedContent = fixedContent.replace(/<div([^>]*?)>(\s*)<Icon/g, '<div$1>\n        $2<Icon');

      // Add proper indentation and closing div tags
      fixedContent = fixedContent.replace(/<Icon([^>]*?) \/>(\s*)<\/>/g, '<Icon$1 />\n        </div>$2</>');

      // Fix broken onClick handlers
      fixedContent = fixedContent.replace(
        /onClick=\{(?:\(\) =>|[^}]*?)(?:\s+setExpanded|\([^}]*?)(?:[^}]*?)\}/g,
        'onClick={() => {}}'
      );
    }

    // Write the fixed content back to the file if changes were made
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error);
  }
}

// Find all TSX story files
const storyFiles = glob.sync('core/components/**/*.story.tsx');

if (storyFiles.length === 0) {
  console.log('No TSX story files found.');
} else {
  console.log(`Found ${storyFiles.length} TSX story files.`);

  // Process each file
  storyFiles.forEach((filePath) => {
    fixStoryFile(filePath);
  });

  console.log('Fix completed!');
}
