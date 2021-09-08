let http = require('http');
let modS = require('./ModD');
let sm = require('./sum');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("Today is " + modS.myDate() +" " +sm.sum(20,30));
    res.end();

}).listen(8080);