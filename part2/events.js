const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {
    sendMessage(msg){
        console.log(`Message sent: ${msg}`);
        this.emit('messageRecieved', msg)  
    }
}
const myEmitter = new MyEmitter();

myEmitter.on('messageRecieved', (msg) => {
  console.log(`new message: ${msg}!`);
});


myEmitter.on('event', (username) => {
  console.log(`an ${username} event occurred!`);
});

myEmitter.once('eventOnce', (username) => {
  console.log(`An event return only once!`);
});


myEmitter.emit('eventOnce');
myEmitter.emit('event', 'ERROR');
myEmitter.sendMessage("Hello mayank");