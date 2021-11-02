const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./content/text.txt', 'utf8');
const second = readFileSync('./content/test.txt', 'utf8');
console.log(first, second);

writeFileSync('./content/result.txt', `here is the result:${first}${second}`, {
  flag: 'a',
});
