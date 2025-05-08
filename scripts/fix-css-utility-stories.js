#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Fixes CSS utility story files
 * @param {string} filePath Path to the story file
 */
function fixCssUtilityStory(filePath) {
  console.log(`Fixing: ${filePath}`);

  try {
    // Read the content of the file
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix duplicate React imports
    if (content.includes('import React from \'react\';') && content.includes('import * as React from \'react\';')) {
      content = content.replace('import React from \'react\';\nimport * as React from \'react\';', 'import React from \'react\';');
    } else if (content.includes('import * as React from \'react\';')) {
      content = content.replace('import * as React from \'react\';', 'import React from \'react\';');
    }
    
    // Fix unclosed JSX tags
    content = content.replace(/<div><\/div>\s+</, '<div>\n      <');
    
    // Fix broken br tags
    content = content.replace(/<br \/ \/ \/ \/ \/>/g, '<br />');
    
    // Fix unclosed div tags
    content = content.replace(/<div([^>]*)><\/div>(\s+)([^<])/g, '<div$1>\n$3');
    
    // Fix adjacent JSX elements
    content = content.replace(/(<\/div>)\s+(<\w+)/g, '$1\n      $2');
    
    // Fix missing closing tags
    const openTags = content.match(/<div[^>]*>/g) || [];
    const closeTags = content.match(/<\/div>/g) || [];
    
    if (openTags.length > closeTags.length) {
      const diff = openTags.length - closeTags.length;
      // Add missing closing tags before the final return closing tag
      const lastReturnIndex = content.lastIndexOf('</div>\n  );');
      if (lastReturnIndex !== -1) {
        const closingTags = Array(diff).fill('</div>').join('\n      ');
        content = content.slice(0, lastReturnIndex) + closingTags + content.slice(lastReturnIndex);
      }
    }
    
    // Write the fixed content back to the file
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error);
  }
}

// Find all CSS utility story files
const storyFiles = glob.sync('core/components/css-utilities/**/*.story.tsx');

if (storyFiles.length === 0) {
  console.log('No CSS utility story files found.');
} else {
  console.log(`Found ${storyFiles.length} CSS utility story files.`);

  // Process each file
  storyFiles.forEach((filePath) => {
    fixCssUtilityStory(filePath);
  });

  console.log('Fix completed!');
}
