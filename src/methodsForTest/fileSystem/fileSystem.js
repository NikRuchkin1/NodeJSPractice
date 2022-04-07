const fsPromise = require('fs/promises');
const fs = require('fs');
const path = require('path');

fs.mkdir(path.resolve(__dirname, 'dir', 'dir2'), { recursive: true }, () => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('New directory');
});

fs.rmdir(path.resolve(__dirname, 'dir'), () => {
  if (err) {
    throw err;
  }
});

fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 qwerty 6 7 13', (err) => {
  if (err) {
    throw err;
  }
});

fs.appendFile(path.resolve(__dirname, 'test.txt'), 'Added to end file', (err) => {
  if (err) {
    throw err;
  }
});

const writeFileAsync = async () => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path.resolve(__dirname, 'test.txt'), (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    }),
  );
};
