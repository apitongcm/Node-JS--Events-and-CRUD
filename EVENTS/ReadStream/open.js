let fs = require('fs');
let events = require('events');
let readStream = fs.createReadStream('./demo.txt');



//ReadStream fires event when opening or closing file.
readStream.on('open',function(){
    console.log('The file is open!');
});

//Event Emitter - To fire event use emit() method.
let eventEmitter = new events.EventEmitter();
let myHandler = function(){
    console.log('I hear a scream!!');
}
let addFile = function(){
    let username = 'Mariya';
    fs.appendFile('name.txt',' ' + username + ' ', function(err){
        if(err) throw err;
            console.log('Saved username');
    });
}

let UpperC = function(){
    let file = 'name.txt';
    fs.rename(file,'Name.txt',function(err){
        if (err) throw err;
            console.log('File Successfully change');
    });
}

eventEmitter.on('scream',myHandler);
//Fire event
eventEmitter.emit('scream');

eventEmitter.on('saveName',addFile);
eventEmitter.emit('saveName');

eventEmitter.on('renameit', UpperC);
eventEmitter.emit('renameit');