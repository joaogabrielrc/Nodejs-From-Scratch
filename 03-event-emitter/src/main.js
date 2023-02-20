const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
const eventName = 'user:click';

myEmitter.on(eventName, click => {
  console.log('A user clicked', click);
});

myEmitter.emit(eventName, 'on the scroll bar');

let count = 1;
setInterval(() => {
  myEmitter.emit(eventName, `on the submit button ${count++}`);
}, 1000);
