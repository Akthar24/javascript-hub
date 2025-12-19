const fs = require('fs');
const net = require('net');

console.log('Step 1: Start');


setTimeout(() => {
  console.log('Step 3: TIMERS - setTimeout');
}, );


fs.readFile(__filename, () => {
  console.log('Step 4: POLL - File read');
  
 
  setImmediate(() => {
    console.log('Step 5a: CHECK - setImmediate inside I/O');
  });
});


setImmediate(() => {
  console.log('Step 5: CHECK - setImmediate');
});


process.nextTick(() => {
  console.log('Step 2a: process.nextTick');
});

Promise.resolve().then(() => {
  console.log('Step 2b: Promise (Microtask)');
});

console.log('Step 2: End');