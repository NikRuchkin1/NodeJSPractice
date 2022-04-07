const PORT = process.env.PORT || 5000;
const Application = require('./src/framework/Aplication');
const userRouter = require('./src/user-router');
const jsonParser = require('./src/framework/parseJson');
const parseUrl = require('./src/framework/parseUrl');
const mongoose = require('mongoose');

const app = new Application();
app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));
app.addRouter(userRouter);
app.listen(PORT, () => console.log(`Server started on PORT=${PORT}`));

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:admin@cluster0.e1ocr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    );
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (err) {}
};

start();
// const server = http
//   .createServer

//   res.end(req.url);
// create router manually
//   res.writeHead(200, {
//     'Content-type': 'application/json',
//   });
//   if (req.url === '/users') {
//     return res.end(JSON.stringify([{ id: 1, name: 'test' }]));
//   }
//   if (req.url === '/posts') {
//     return res.end('POSTS');
//   }

//   res.end(req.url);
//   res.writeHead(200, {
//     'Content-type': 'text/html; charset=utf-8',
//   });
//   res.end('<h1>Test</h1>');
// ();

// server.listen(PORT, () => console.log(`Server started on PORT=${PORT}`));
