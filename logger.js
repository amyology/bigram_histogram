/**
 * @fileoverview Logger tool
 */

const colorMap = {
  blue: '\x1b[34m%s\x1b[0m',
  cyan: '\x1b[36m%s\x1b[0m',
  green: '\x1b[32m%s\x1b[0m',
  red: '\x1b[31m%s\x1b[0m'
};

module.exports.error = (message) => console.error(colorMap.red, message);
module.exports.info = (message) => console.log(colorMap.cyan, message);
module.exports.log = (message) => console.log(colorMap.blue, message);
module.exports.success = (message) => console.log(colorMap.green, message);
