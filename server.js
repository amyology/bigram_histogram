const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

server.listen(port, hostname, () => {
  const configOptions = require('./configOptions');

  const fileIndex = process.argv.indexOf('--filename');
  const fileName = process.argv[fileIndex + 1];
  const wordsIndex = process.argv.indexOf('--words');
  const firstWord = process.argv[wordsIndex + 1];
  const secondWord = process.argv[wordsIndex + 2];
  const runTest = process.argv.indexOf('--test') > 0;

  configOptions(fileIndex, fileName, firstWord, secondWord, runTest);
});
