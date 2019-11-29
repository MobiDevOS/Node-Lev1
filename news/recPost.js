var http = require('http');
var fs = require('fs');
var path = require('path');

var queryString = require('querystring');

var server = http.createServer();
server.on('request',function (req,res) {

    if(req.url.startsWith('/resource') &&req.method == 'post'){
       var array = [];
       req.on('data',function (chunk) {
           array.push(chunk)
       })
        req.on('end',function () {
            var parseBody = Buffer.concat(array);
            parseBody = parseBody.toString('utf-8');
            parseBody = queryString.parse(parseBody)
            console.log(parseBody);
        })
    }


}).listen(8080,function () {
    console.log('服务器启动了，请访问：http://localhost:8080')
})