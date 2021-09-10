var formidable = require('formidable'); //Parse Uploaded file
var fs = require('fs'); // saving files temporary
var http = require('http');

http.createServer(function (req, res){
    //Uploading
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files){
            //Saving files
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/Name/Desktop/NODEJS/UPLOAD/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function(err){
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    }
    else
    {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type= "submit">');
        res.write('</form>');
        return res.end();
    }
    
}).listen(8000);
