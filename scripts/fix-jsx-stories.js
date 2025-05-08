#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Fixes malformed JSX in story files
 * @param {string} filePath Path to the story file
 */
function fixJsxStoryFile(filePath) {
  console.log(`Checking file: ${filePath}`);

  try {
    // Read the content of the file
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    let modified = false;

    // Check for specific problematic patterns

    // Fix for malformed JSX with too many closing tags
    if (
      fixedContent.includes('</Label></div></Label>') ||
      fixedContent.includes('</div></Label>') ||
      fixedContent.includes('"</Label>') ||
      fixedContent.includes('Label>Date"</Label>') ||
      fixedContent.includes('<div><div>') ||
      fixedContent.match(/<\/\w+><\/\w+><\/\w+><\/\w+>/)
    ) {
      console.log(`Found malformed JSX in ${filePath}`);
      modified = true;

      // Replace incorrect nested Label closing tags
      fixedContent = fixedContent.replace(
        /<Label>(.*?)<\/Label><\/div><\/Label><\/div><\/Label>/g,
        '<Label>$1</Label></div>'
      );
      fixedContent = fixedContent.replace(
        /<Label>(.*?)"<\/Label><\/div><\/Label><\/div><\/Label>/g,
        '<Label>$1</Label></div>'
      );
      fixedContent = fixedContent.replace(/<Label>(.*?)<\/Label><\/div><\/Label>/g, '<Label>$1</Label></div>');
      fixedContent = fixedContent.replace(/Label>Date"<\/Label>/g, 'Label>Date</Label>');

      // Fix duplicate div openings
      fixedContent = fixedContent.replace(/<div><div>/g, '<div>');

      // Fix improper closing of JSX blocks
      const lines = fixedContent.split('\n');
      let bracketCounter = 0;
      let inJsxBlock = false;

      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('<>')) {
          inJsxBlock = true;
        }

        if (inJsxBlock) {
          // Count angle brackets to keep track of nesting
          const openCount = (lines[i].match(/</g) || []).length;
          const closeCount = (lines[i].match(/>/g) || []).length;
          bracketCounter += openCount - closeCount;

          // Fix cases where a line ends with a comma inside JSX
          if (lines[i].trim().endsWith(',') && bracketCounter > 0) {
            lines[i] = lines[i].replace(/,\s*$/, '');
          }
        }

        if (lines[i].includes('</>')) {
          inJsxBlock = false;
          bracketCounter = 0;
        }
      }

      fixedContent = lines.join('\n');

      // Fix any explicit closing tags that should be self-closing
      fixedContent = fixedContent.replace(/<(Icon|img|input|br)([^>]*?)><\/(Icon|img|input|br)>/g, '<$1$2 />');

      // Fix any broken JSX tags with duplicated quotes
      fixedContent = fixedContent.replace(/"([^"]*?)""([^"]*?)"/g, '"$1$2"');

      // Ensure proper React import if using JSX
      if (!fixedContent.includes('import React') && fixedContent.includes('<')) {
        fixedContent = `import React from 'react';\n${fixedContent}`;
      }

      // Handle specific known file problems
      if (filePath.includes('withDatePicker.story.tsx')) {
        fixedContent = `import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { TimePicker, DatePicker, Row, Label } from "@/index";

const meta = {
  title: "Components/TimePicker/TimePickerWithSearch/With Date Picker",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDatePicker: Story = {
  args: {
    handleDateChange: "(date)",
    children: (
      <>
        <div className="w-25">
          <Label>Date</Label>
        </div>
        <div className="w-25">
          <DatePicker />
        </div>
      </>
    ),
    className: "w-25"
  }
};`;
      }

      // Write the fixed content back to the file if changes were made
      if (modified) {
        fs.writeFileSync(filePath, fixedContent);
        console.log(`Fixed ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error);
  }
}

// Find all story files
const allStoryFiles = glob.sync('core/components/**/*.story.tsx');
console.log(`Found ${allStoryFiles.length} story files in total.`);

// Process all story files
allStoryFiles.forEach((filePath) => {
  fixJsxStoryFile(filePath);
});

console.log('JSX fix completed!');
