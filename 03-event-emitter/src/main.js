const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
const eventName = 'user:click';

const stdin = process.openStdin();

stdin.addListener('data', value => {
  console.log(`You typed: ${value.toString().trim()}\n`);
});
