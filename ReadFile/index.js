let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return  res.end();
    });

    fs.appendFile('index.txt', 'Hello Ganda', function(err){
        if(err) throw err;
        console.log('Saved');
    });

    fs.open('index1.txt', 'w', function(err, file) {
        if(err) throw err;
        console.log('String Saved');
    });

    fs.writeFile('index2.txt', 'Hello How are you ?', function (err){
        if(err) throw err; 
        console.log('Saving this....');
    });

    // fs.unlink('index3.txt', function(err){
    //     if (err) throw err;
    //         console.log('File Deleted');
    // });

    fs.rename('index2.txt', 'rename.txt', function(err){
        if (err) throw err;
            console.log('File Renamed');
    });
}).listen(8000);