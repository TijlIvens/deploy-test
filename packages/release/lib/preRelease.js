// Native
const { existsSync } = require('fs');
const { resolve } = require('path');

// Utilities
const handleSpinner = require('../lib/spinner');

module.exports = async (version) => {
  let file = resolve(process.cwd(), 'pre-release.js');

  if (!existsSync(file)) {
    return null;
  }

  let hook;

  try {
    hook = require(file);
  } catch (err) {
    handleSpinner.fail(err);
  }

  if (typeof hook !== 'function') {
    handleSpinner.fail(`The pre-release hook file doesn't export a function`);
  }

  if (global.spinner) {
    global.spinner.succeed('Found a pre-release hook file');
  }

  try {
    await hook(version);
  } catch (err) {
    handleSpinner.fail(err);
  }
};
