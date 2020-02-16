/**
 * @fileoverview Parse text input file
 */

const fs = require('fs');
const logger = require('./logger');

/**
 * Read text file
 * 
 * @param {string} fileName - Name of the text file to be parsed
 * @returns {object} The text file to be parsed
 *
 */
function readFile (filePath) {
  let file = null;

  try {
    file = fs.readFileSync(filePath);
  } catch (e) {
    logger.error(`${filePath} not found.`);
  }

  return file;
}

/**
 * Format text for bigram count
 * 
 * @param {object} file - The The text file to be processed
 * @returns {array} An array of the words in the text file in lowercase without punctuation
 *
 */
function formatText (file) {
  const fileText = file.toString().toLowerCase().replace(/\n/gm,' ').replace(/[^\w\s]/gm,'');
  const textArr = fileText.split(' ');
  return textArr;
}

/**
 * Get histogram - the number of times the first and second words appear in sequence in the text
 * 
 * @param {array} textArr - An array of words from the text file
 * @param {array} firstWord - The first word of the bigram
 * @param {array} secondWord - The second word of the bigram
 * @returns {integer} Bigrams count
 *
 */
function getBigramsCount (textArr, firstWord, secondWord) {
  let count = 0;

  for (const word of textArr) {
    const firstWordIndex = textArr.indexOf(word);
    const nextWord = textArr[firstWordIndex + 1];
    if (word === firstWord && nextWord === secondWord) count += 1;
  }

  return count;
}

/**
 * Process text file
 * 
 * @param {string} fileName - The name of the file to be parsed
 * @param {string} firstWord - The first word of the bigram
 * @param {string} secondWord - The second word of the bigram
 * @returns {integer} Histogram of the first and second words or null
 *
 */
function processFile (fileName, firstWord, secondWord) {
  const file = readFile(`${__dirname}/files/${fileName}.txt`);

  if (file) {
    const textArr = formatText(file);
    const count = getBigramsCount(textArr, firstWord, secondWord);
    return count;
  }

  return null;
}

module.exports = {
  readFile,
  formatText,
  getBigramsCount,
  processFile
}
