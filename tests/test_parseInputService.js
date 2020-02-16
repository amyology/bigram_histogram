/**
 * @fileoverview Tests for parseInputService.js
 */

const fs = require('fs');
const logger = require('../logger');
const parseInputService = require('../parseInputService');
const testData = require('./testData/testData');

/**
 * @function Test 1:  Read text file
 * 
 */
function testReadFile (testResults) {
  let result = null;

  logger.info('Test 1 expected result: test.txt exists and can be read.');

  try {
    result = parseInputService.readFile(`${__dirname}/testData/testFile.txt`);
    logger.success('Test 1 actual result: test.txt exists and can be read.');
  } catch (e) {
    logger.error(`Test 1 actual result: ${e}`);
  }

  if (result) {
    testResults.pass += 1;
    logger.log('Test 1 pass? true');
  } else {
    testResults.fail += 1;
    logger.log('Test 1 pass? false');
  }

  return testResults;
}

/**
 * @function Test 2: Format text - transform to lowercase, remove punctuation and line breaks, and return array of words
 * 
 */
function testFormatText (testResults) {
  const file = fs.readFileSync(`${__dirname}/testData/testFile.txt`);
  const formattedData = parseInputService.formatText(file);
  const result = formattedData.toString() === testData.toString();

  logger.info(`Test 2 expected result: ${testData.toString()}`);
  
  if (result) {
    testResults.pass += 1;
    logger.success(`Test 2 actual result: ${formattedData.toString()}`);
  } else {
    testResults.fail += 1;
    logger.error(`Test 2 actual result: ${formattedData.toString()}`);
  }

  logger.log(`Test 2 pass? ${result}`);

  return testResults;
}

/**
 * @function Test 3: Count bigrams
 * 
 */
function testGetBigramsCount (testResults) {
  const count = parseInputService.getBigramsCount(testData, 'squirty', 'cheese');
  const result = count === 3;

  logger.info('Test 3 expected result: 3');

  if (result) {
    testResults.pass += 1;
    logger.success(`Test 3 actual result: ${count}`);
  } else {
    testResults.fail += 1;
    logger.error(`Test 3 actual result: ${count}`);
  }

  logger.log(`Test 3 pass? ${result}`);

  return testResults;
}

module.exports = (testResults) => {
  logger.log('Running unit tests...');
  console.log('\n');

  testReadFile(testResults);
  console.log('\n');

  testFormatText(testResults);
  console.log('\n');

  testGetBigramsCount(testResults);
  console.log('\n');

  return testResults;
}
