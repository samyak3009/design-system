#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Fixes JSX files with TypeScript imports
 * @param {string} filePath Path to the story file
 */
function fixJsxFile(filePath) {
  console.log(`Fixing: ${filePath}`);

  try {
    // Read the content of the file
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;

    // Replace TypeScript imports with regular imports
    if (fixedContent.includes('import type {')) {
      fixedContent = fixedContent.replace(/import type \{ Meta, StoryObj \} from "@storybook\/react";/g,
        '// @ts-ignore\nimport { Meta, StoryObj } from "@storybook/react";');
    }

    // Fix lowercase component imports
    const componentNames = ['avatar', 'button', 'collapsible', 'dropdown', 'heading', 'icon',
      'message', 'spinner', 'subheading', 'text', 'verticalNav', '__stories__'];

    componentNames.forEach(name => {
      const capitalizedName = name === '__stories__' ? 'Dropdown' : name.charAt(0).toUpperCase() + name.slice(1);
      const regex = new RegExp(`import { ${name} } from "@/index"`, 'g');
      fixedContent = fixedContent.replace(regex, `import { ${capitalizedName} } from "@/index"`);
    });

    // Remove 'satisfies' TypeScript syntax
    fixedContent = fixedContent.replace(/} satisfies Meta<typeof \w+>;/g, '};');

    // Write the fixed content back to the file if changes were made
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error);
  }
}

// Find all JSX story files
const storyFiles = glob.sync('core/components/**/*.story.jsx');

if (storyFiles.length === 0) {
  console.log('No dropdown JSX story files found.');
} else {
  console.log(`Found ${storyFiles.length} dropdown JSX story files.`);

  // Process each file
  storyFiles.forEach((filePath) => {
    fixJsxFile(filePath);
  });

  console.log('Fix completed!');
}
