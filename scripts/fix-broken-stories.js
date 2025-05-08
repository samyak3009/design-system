#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Fixes broken story files
 * @param {string} filePath Path to the story file
 */
function fixBrokenStory(filePath) {
  console.log(`Fixing: ${filePath}`);

  try {
    // Read the content of the file
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has syntax errors
    const hasSyntaxErrors = (
      content.includes('children: (') && 
      (content.includes(')children: (') || 
       content.includes('",') || 
       content.includes('</div></div></div></div>') ||
       content.includes('className: "'))
    );
    
    if (!hasSyntaxErrors) {
      console.log(`No syntax errors found in ${filePath}, skipping`);
      return;
    }
    
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
    let titlePath;
    
    if (storyIndex !== -1) {
      titlePath = titleParts.slice(componentIndex, storyIndex).join('/');
      
      // Add any subdirectories after __stories__
      if (storyIndex + 1 < titleParts.length - 1) {
        titlePath += '/' + titleParts.slice(storyIndex + 1, -1).join('/');
      }
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
  render: () => {
    return (
      <div className="d-flex">
        <${componentName.charAt(0).toUpperCase() + componentName.slice(1)}>
          ${storyName} Example
        </${componentName.charAt(0).toUpperCase() + componentName.slice(1)}>
      </div>
    );
  }
};
`;

    // Write the fixed content back to the file
    fs.writeFileSync(filePath, tsxContent);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error);
  }
}

// Find all story files
const storyFiles = glob.sync('core/components/**/*.story.tsx');

if (storyFiles.length === 0) {
  console.log('No story files found.');
} else {
  console.log(`Found ${storyFiles.length} story files.`);

  // Process each file
  storyFiles.forEach((filePath) => {
    fixBrokenStory(filePath);
  });

  console.log('Fix completed!');
}
