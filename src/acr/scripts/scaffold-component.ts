/*
  UI Component Scaffolding Script
  This is a script that enables scaffolding a new JSS component using `npm run scaffold <ComponentName>`.

  The default naming convention is that component names must start with a capital letter, and can contain
  letters, number, underscores, or dashes.
  
  If the <ComponentName> parameter includes a path, it must be relative to the src/components folder.
  For example, `npm run scaffold search/SearchBox` will create a component called `SearchBox` in
  `src/components/search/SearchBox.tsx`. Specifying a relative path is optional, 
  and just providing the name is ok.

  Edit this script if you wish to use your own conventions for component storage in your JSS app.
*/

/** VELIR
 *
 *  This script has been modified from the default JSS setup
 *  to better fit the dev workflow at Velir.
 *
 *  Naming has been updated to follow the ComponentName convention.
 *
 *  Custom script includes:
 *
 *  Removed unneeded manifest code
 *  Generate Storybook file with mockdata
 *  Generate Sass file
 *  Generate unit test file
 *  Generate mock data file
 *  Generate props file
 *  Generate utils file
 *  Default component generation in own folder
 *  Updated default root path
 *    --> this still allows for including a custom path
 */

/* eslint-disable no-throw-literal,no-console */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

import generateComponentUiStory from './templates/component-ui-story';
import generateComponentUiProps from './templates/component-ui-props';
import generateComponentMockData from './templates/component-ui-mock';
import generateComponentUiTest from './templates/component-ui-test';
import generateComponentUtils from './templates/component-utils';
import generateComponentSrc from './templates/component-src';

const componentRootPath = 'src/components';

// Matches component names that start with a capital letter, and contain only letters, number,
// underscores, or dashes. Optionally, the component name can be preceded by a relative path
const nameParamFormat = new RegExp(/^((?:[\w-]+\/)*)([A-Z][\w-]+)$/);
const componentArg = process.argv[2];

if (!componentArg) {
  throw 'Component name was not passed. Usage: npm run scaffold <ComponentName>';
}

const regExResult = nameParamFormat.exec(componentArg);

if (regExResult === null) {
  throw `Component name should start with an uppercase letter and contain only letters, numbers,
dashes, or underscores. If specifying a path, it must be relative to src/components`;
}

const componentPath = regExResult[1];

// Check to see if the component name ends in our desired base suffix, add the suffix if not
const componentNameRaw = regExResult[2];
const componentName = componentNameRaw;

const filename = `${componentName}.tsx`;
const componentDestPath = `${componentRootPath}/ACR`;

const componentOutputPath = scaffoldFile(
  componentDestPath,
  generateComponentSrc(componentName),
  filename
);

const storyOutputPath = scaffoldFile(
  componentDestPath,
  generateComponentUiStory(componentName),
  `${componentName}.stories.tsx`
);

const mockDataOutputPath = scaffoldFile(
  componentDestPath,
  generateComponentMockData(componentName),
  `${componentName}.mock.ts`
);

const propsOutputPath = scaffoldFile(
  componentDestPath,
  generateComponentUiProps(componentName),
  `${componentName}.props.tsx`
);

const testOutputPath = scaffoldFile(
  componentDestPath,
  generateComponentUiTest(componentName),
  `${componentName}.test.tsx`
);

const utilsOutputPath = scaffoldFile(
  componentDestPath,
  generateComponentUtils(componentName),
  `${componentName}.util.ts`
);

if (componentOutputPath) {
  console.log(`* Implement the Data component in ${chalk.green(componentOutputPath)}`);
}
if (storyOutputPath) {
  console.log(`* Implement your Storybook stories in ${chalk.green(storyOutputPath)}`);
}
if (propsOutputPath) {
  console.log(`* Add prop types for the component in ${chalk.green(propsOutputPath)}`);
}
if (mockDataOutputPath) {
  console.log(`* Add mock data for the component in ${chalk.green(mockDataOutputPath)}`);
}
if (testOutputPath) {
  console.log(`* Test the component in ${chalk.green(testOutputPath)}`);
}
if (utilsOutputPath) {
  console.log(`* Add utils for the component in ${chalk.green(mockDataOutputPath)}`);
}

console.log(
  `* Test your new UI component in Storybook using (${chalk.green('npm run storybook:prebuild')})`
);

/**
 * Force to use `crlf` line endings, we are using `crlf` across the project.
 * Replace: `lf` (\n), `cr` (\r)
 * @param {string} content
 */
function editLineEndings(content: string) {
  return content.replace(/\r|\n/gm, '\r\n');
}

/**
 * Creates a file relative to the specified path if the file doesn't exist. Creates directories as needed.
 * @param {string} rootPath - the root path
 * @param {string} fileContent - the file content
 * @param {string} filename - the filename
 * @returns the new file's filepath
 */
function scaffoldFile(
  rootPath: string,
  fileContent: string,
  filename: string,
  fileOverride?: string
): string | null {
  const parentDirectory = fileOverride ?? componentName;
  const outputDir = path.join(rootPath, componentPath, parentDirectory);
  const outputFile = path.join(outputDir, filename);

  if (fs.existsSync(outputFile)) {
    console.log(chalk.red(`Skipping creating ${outputFile}; already exists.`));
    return null;
  }

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputFile, editLineEndings(fileContent), 'utf8');
  console.log(chalk.green(`File ${outputFile} has been scaffolded.`));
  return outputFile;
}
