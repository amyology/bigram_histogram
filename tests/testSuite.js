/**
 * @fileoverview Test suite
 */

module.exports = () => {
  const logger = require('../logger');
  const testParseInputService = require('./test_parseInputService');

  let testResults = {
    pass: 0,
    fail: 0
  }

  testParseInputService(testResults);

  const testsPassed = testResults.pass;
  const testsFailed = testResults.fail;
  const totalTests = testResults.pass + testResults.fail;

  logger.success(`${testsPassed} tests passed.`);
  logger.error(`${testsFailed} tests failed.`);
  logger.log(`${Math.floor(testsPassed / totalTests * 100)}% of tests passed.`);
}
