const fs = require('fs');
const { EventEmitter } = require('events');
const eventsEmitter = new EventEmitter();

eventsEmitter.on('error', evtErr => console.log(evtErr));

fs.readFile('f1.txt', 'utf-8', (err, data) => {
    if (err)
        return eventsEmitter.emit('error', err);
    
    console.log(data);
})

fs.readFile('f2.txt', 'utf-8', (err, data) => {
    if (err)
        return eventsEmitter.emit('error', err);
    
    console.log(data);
})

fs.promises.readFile('f1.txt', 'utf-8')
.then(data => console.log(data))
.catch(err => eventsEmitter.emit('error', err));

async function read(file) {
    const data = await fs.promises.readFile(file, 'utf-8');
    console.log(data);
}

function catchErr(err) {
    console.log(err)
}

read('f2.txt').catch(catchErr);