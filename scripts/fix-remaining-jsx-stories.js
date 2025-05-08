#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Creates a fixed story file
 * @param {string} filePath Path to the story file
 */
function fixStoryFile(filePath) {
  console.log(`Fixing: ${filePath}`);

  try {
    // Extract component name and story name from file path
    const pathParts = filePath.split('/');
    const componentIndex = pathParts.findIndex(part => part === 'components') + 2;
    const componentName = pathParts[componentIndex];
    const storyFileName = path.basename(filePath, '.jsx');
    const storyName = storyFileName.split('.')[0];
    
    // Create a title based on the file path
    const titleParts = filePath.split('/');
    const storyIndex = titleParts.findIndex(part => part.includes('__stories__'));
    let titlePath;
    
    if (storyIndex !== -1) {
      titlePath = titleParts.slice(componentIndex, storyIndex).join('/');
    } else {
      titlePath = titleParts.slice(componentIndex, -1).join('/');
    }
    
    // Create a new TSX file with proper structure
    const tsxContent = `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from '@/index';

const meta = {
  title: 'Components/${titlePath}/${storyName}',
  component: ${componentName.charAt(0).toUpperCase() + componentName.slice(1)},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ${componentName.charAt(0).toUpperCase() + componentName.slice(1)}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ${storyName}: Story = {
  render: () => (
    <div>
      <${componentName.charAt(0).toUpperCase() + componentName.slice(1)}>
        ${storyName} Example
      </${componentName.charAt(0).toUpperCase() + componentName.slice(1)}>
    </div>
  )
};
`;

    // Write the new TSX file
    const tsxFilePath = filePath.replace(/\.jsx$/, '.tsx');
    fs.writeFileSync(tsxFilePath, tsxContent);
    console.log(`Created: ${tsxFilePath}`);

    // Delete the original JSX file
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error);
  }
}

// Find all remaining JSX story files (excluding dropdown)
const storyFiles = glob.sync([
  'core/components/**/*.story.jsx',
  '!core/components/atoms/dropdown/**/*.story.jsx'
]);

if (storyFiles.length === 0) {
  console.log('No remaining JSX story files found.');
} else {
  console.log(`Found ${storyFiles.length} remaining JSX story files.`);

  // Process each file
  storyFiles.forEach((filePath) => {
    fixStoryFile(filePath);
  });

  console.log('Fix completed!');
}
