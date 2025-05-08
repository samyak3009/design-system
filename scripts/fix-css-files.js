const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix CSS files with incorrect imports
function fixCssFile(filePath) {
  console.log(`Fixing CSS file: ${filePath}`);

  try {
    // Read the file content
    const content = fs.readFileSync(filePath, 'utf8');

    // Check if the file starts with imports
    if (content.trim().startsWith('import')) {
      // Find the actual CSS content (starts after all imports and module exports)
      const cssStartIndex = content.indexOf('/*');

      if (cssStartIndex > 0) {
        // Extract only the CSS content
        const cssContent = content.substring(cssStartIndex);

        // Write the fixed content back to the file
        fs.writeFileSync(filePath, cssContent, 'utf8');
        console.log(`Fixed ${filePath}`);
      } else {
        console.log(`No CSS content found in ${filePath}, skipping`);
      }
    } else {
      console.log(`No issues found in ${filePath}, skipping`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error);
  }
}

// Find all CSS module files
const cssFiles = glob.sync('css/src/components/*.module.css');
console.log(`Found ${cssFiles.length} CSS module files.`);

// Fix each CSS file
cssFiles.forEach(fixCssFile);

console.log('CSS fix completed!');
