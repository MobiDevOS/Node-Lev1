var http = require('http');
var server = http.createServer();
var fs = require('fs');
var path = require('path');

server.on('request',function (req,res) {
    // res.setHeader('Content-Type','text/html;charset-utf-8');
    // res.write('<h1>hello-world</h1>');
    res.setHeader('Content-Type','text/html;charset-utf-8');

    var url = req.url;
    console.log(url);

   if(url == '/start'){
       console.log('start-page');
       res.write('startPage');
       res.end();
   }else{
       var absPath =  path.join(__dirname,'htmls','notfound.html');
       fs.readFile(absPath,'UTF-8',function(err,data){

           if(err){
               throw err;
           }
           res.end(data);
       });
   }

}).listen(8080,function () {
    console.log('服务器启动了，请访问：http://localhost:8080')
})