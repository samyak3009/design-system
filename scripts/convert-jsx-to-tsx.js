#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Converts a story file from JSX to TSX format using the CSF 3.0 standard
 * @param {string} filePath Path to the story file
 */
function convertStoryFile(filePath) {
  console.log(`Converting: ${filePath}`);

  try {
    // Read the content of the original file
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix TypeScript imports in JSX files
    if (content.includes('import type {')) {
      content = content.replace(/import type \{ Meta, StoryObj \} from "@storybook\/react";/g,
        'import { Meta, StoryObj } from "@storybook/react";');
    }

    // Add React import if not present
    if (!content.includes('import React')) {
      content = 'import React from \'react\';\n' + content;
    }

    // Extract imports
    const importMatch = content.match(/import\s+\{([^}]+)\}\s+from\s+['"]@\/index['"];/);
    if (!importMatch) {
      console.warn(`Could not find imports in ${filePath}, skipping`);
      return;
    }

    // Get imported components
    const components = importMatch[1]
      .split(',')
      .map((c) => c.trim())
      .filter((c) => c)
      .map(c => {
        // Capitalize component names
        if (['avatar', 'button', 'collapsible', 'dropdown', 'heading', 'icon',
             'message', 'spinner', 'subheading', 'text', 'verticalNav', '__stories__'].includes(c)) {
          return c === '__stories__' ? 'Dropdown' : c.charAt(0).toUpperCase() + c.slice(1);
        }
        return c;
      });

    // Extract the main component (first one in the import)
    const mainComponent = components[0];

    // Extract the default export to get the title
    const defaultExportMatch = content.match(/export\s+default\s+\{([^}]+)\}/s);
    if (!defaultExportMatch) {
      console.warn(`Could not find default export in ${filePath}, skipping`);
      return;
    }

    // Extract title
    const titleMatch = defaultExportMatch[1].match(/title:\s*['"]([^'"]+)['"]/);
    const title = titleMatch ? titleMatch[1] : 'Unknown';

    // Find story exports
    const storyPattern =
      /export\s+const\s+([a-zA-Z0-9_]+)\s*=\s*\(\)\s*=>\s*\{([\s\S]*?)return\s+([\s\S]*?);[\s\S]*?\}/g;
    let storyMatch;
    let stories = [];

    while ((storyMatch = storyPattern.exec(content)) !== null) {
      const storyName = storyMatch[1];
      const storySetup = storyMatch[2];
      const storyReturn = storyMatch[3];

      // Extract args from the story setup
      const args = {};

      // Look for variable assignments in the setup section
      const varAssignments = storySetup.match(/const\s+([a-zA-Z0-9_]+)\s*=\s*['"]?([^'";\s]+)['"]?/g);
      if (varAssignments) {
        varAssignments.forEach((assignment) => {
          const [, name, value] = assignment.match(/const\s+([a-zA-Z0-9_]+)\s*=\s*['"]?([^'";\s]+)['"]?/);
          args[name] = value;
        });
      }

      // Extract children content from return statement if it's a simple component with children
      const childrenMatch = storyReturn.match(/<[^>]+>(.*?)<\/[^>]+>/s);
      if (childrenMatch && childrenMatch[1] && childrenMatch[1].trim()) {
        args.children = childrenMatch[1].trim();
      }

      // Extract props directly from the component
      const propsMatch = storyReturn.match(/<[^>]+\s+([^>]+)>/s);
      if (propsMatch && propsMatch[1]) {
        const propString = propsMatch[1];
        const propRegex = /([a-zA-Z0-9_]+)={?['"]?([^'"}\s]+)['"]?}?/g;
        let propMatch;

        while ((propMatch = propRegex.exec(propString)) !== null) {
          args[propMatch[1]] = propMatch[2];
        }
      }

      stories.push({
        name: storyName,
        args,
      });
    }

    // Create the TSX content
    let tsxContent = `import React from 'react';\n`;
    tsxContent += `import type { Meta, StoryObj } from '@storybook/react';\n`;
    tsxContent += `import { ${components.join(', ')} } from '@/index';\n\n`;

    tsxContent += `const meta = {\n`;
    tsxContent += `  title: '${title}',\n`;
    tsxContent += `  component: ${mainComponent},\n`;
    tsxContent += `  parameters: {\n`;
    tsxContent += `    layout: 'centered',\n`;
    tsxContent += `  },\n`;
    tsxContent += `} satisfies Meta<typeof ${mainComponent}>;\n\n`;

    tsxContent += `export default meta;\n`;
    tsxContent += `type Story = StoryObj<typeof meta>;\n\n`;

    // Add each story
    if (stories.length === 0) {
      // If no stories were extracted, create a default one
      const storyName = path.basename(filePath, '.jsx').split('.')[0];
      const capitalizedStoryName = storyName.charAt(0).toUpperCase() + storyName.slice(1);

      tsxContent += `export const ${capitalizedStoryName}: Story = {\n`;
      tsxContent += `  render: () => (\n`;
      tsxContent += `    <div>\n`;
      tsxContent += `      <${mainComponent}>${mainComponent} Example</${mainComponent}>\n`;
      tsxContent += `    </div>\n`;
      tsxContent += `  )\n`;
      tsxContent += `};\n\n`;
    } else {
      stories.forEach((story) => {
        const storyName = story.name.charAt(0).toUpperCase() + story.name.slice(1);
        tsxContent += `export const ${storyName}: Story = {\n`;

        if (Object.keys(story.args).length > 0) {
          tsxContent += `  args: {\n`;
          Object.entries(story.args).forEach(([key, value]) => {
            // Handle children specially
            if (key === 'children' && value.includes('<')) {
              tsxContent += `    ${key}: (\n`;
              tsxContent += `      <>\n`;
              tsxContent += `        ${value}\n`;
              tsxContent += `      </>\n`;
              tsxContent += `    ),\n`;
            } else {
              tsxContent += `    ${key}: '${value}',\n`;
            }
          });
          tsxContent += `  },\n`;
        } else {
          // Add a render method if no args
          tsxContent += `  render: () => (\n`;
          tsxContent += `    <div>\n`;
          tsxContent += `      <${mainComponent}>${storyName} Example</${mainComponent}>\n`;
          tsxContent += `    </div>\n`;
          tsxContent += `  )\n`;
        }

        tsxContent += `};\n\n`;
      });
    }

    // Write the new TSX file
    const tsxFilePath = filePath.replace(/\.jsx$/, '.tsx');
    fs.writeFileSync(tsxFilePath, tsxContent);
    console.log(`Created: ${tsxFilePath}`);

    // Delete the original JSX file
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${filePath}`);
  } catch (error) {
    console.error(`Error converting ${filePath}:`, error);
  }
}

// Find all story files
const storyFiles = glob.sync('core/components/**/*.story.jsx');

if (storyFiles.length === 0) {
  console.log('No JSX story files found.');
} else {
  console.log(`Found ${storyFiles.length} JSX story files.`);

  // Process each file
  storyFiles.forEach((filePath) => {
    convertStoryFile(filePath);
  });

  console.log('Conversion completed!');
}
