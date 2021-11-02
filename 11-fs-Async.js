const { readFile, writeFile } = require('fs');

readFile('./content/text.txt', 'utf8', (err, result) => {
  if (err) {
    console(err);
    return;
  }
  const me = result;
  console.log(me);
  readFile('./content/test.txt', 'utf8', (err, result) => {
    if (err) {
      console(err);
      return;
    }
    const you = result;
    console.log(you);
    writeFile(
      './content/result.txt',
      `here is the results:${me},${you}`,
      (err, result) => {
        if (err) {
          console(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
