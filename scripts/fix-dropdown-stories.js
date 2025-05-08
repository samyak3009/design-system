#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Creates a fixed dropdown story file
 * @param {string} filePath Path to the story file
 */
function fixDropdownStory(filePath) {
  console.log(`Fixing: ${filePath}`);

  try {
    // Extract component name and story name from file path
    const pathParts = filePath.split('/');
    const storyFileName = path.basename(filePath, '.jsx');
    const storyName = storyFileName.split('.')[0];
    
    // Create a new TSX file with proper structure
    const tsxContent = `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@/index';

const meta = {
  title: 'Components/Dropdown/${storyName}',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ${storyName}: Story = {
  render: () => {
    const options = [
      {
        label: 'Option 1',
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
    ];
    
    return (
      <div style={{ width: '300px' }}>
        <Dropdown
          options={options}
          placeholder="Select an option"
        />
      </div>
    );
  }
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

// Find all dropdown JSX story files
const dropdownStoryFiles = glob.sync('core/components/atoms/dropdown/**/*.story.jsx');

if (dropdownStoryFiles.length === 0) {
  console.log('No dropdown JSX story files found.');
} else {
  console.log(`Found ${dropdownStoryFiles.length} dropdown JSX story files.`);

  // Process each file
  dropdownStoryFiles.forEach((filePath) => {
    fixDropdownStory(filePath);
  });

  console.log('Fix completed!');
}
