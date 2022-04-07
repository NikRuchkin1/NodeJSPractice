//Readable - read
//Writeble - write
//Duplex - universal stream for read and srite
//Transform - equally Duplex but can transform data when he read it

const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

//One chunk === 64 kb
stream.on('data', (chunk) => {
  console.log(chunk);
});

stream.on('end', () => console.log('Finish stream'));
stream.on('open', () => console.log('Start to read'));
stream.on('error', () => console.log(e));

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'));
for (let i = 0; i < 20; i++) {
  writableStream.write(i + '\n');
}

writableStream.end();
writableStream.close();
writableStream.destroy();

writableStream.on('error');

const http = require('http');
const res = require('express/lib/response');

http.createServer((req, res) => {
  //req - readable stream
  //res - writable stream

  const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

  //Stream will finish read early then user will dowload file
  // stream.on('data', chunk => res.write(chunk))
  // stream.on('end', chunk => res.end(chunk))
  //========> need to sync readable and writable stream
  stream.pipe(res);
});
