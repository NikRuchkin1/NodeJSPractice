const Emmiter = require('events');

const emitter = new Emmiter();

emitter.on('message', (data, second, third) => {
  console.log('You sent a message' + data);
  console.log('Second argument' + second);
});

const MESSAGE = process.env.message || '';

if (MESSAGE) {
  emitter.emit('message', MESSAGE, 123);
} else {
  // call action only once time
  emitter.once('message', `You didn't create message`);
}
