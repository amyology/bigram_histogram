/**
 * @fileoverview Command line configuration options
 */

module.exports = (fileIndex, fileName, firstWord, secondWord, runTest) => {
  if (runTest) {
    const testSuite = require('./tests/testSuite');
    testSuite();
    process.exit();
  } else {
    const logger = require('./logger');
    const parseInputService = require('./parseInputService');

    if (fileIndex < 0) logger.error('--filename parameter is missing. Please enter a filename.');
    if (fileName) logger.log(`Parsing file ${fileName}.txt...`);

    const count = parseInputService.processFile(fileName, firstWord, secondWord);
    if (count) logger.log(`Histogram of "${firstWord}" and "${secondWord}": ${count}`);

    process.exit();
  }
}
