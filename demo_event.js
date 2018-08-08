var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function (input, input2, input3) {
  console.log('I hear a scream!',input+ input2+ input3);
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream','law','rence', 'pika ');