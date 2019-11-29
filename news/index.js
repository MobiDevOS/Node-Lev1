var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer();
var mime = require('mime');


server.on('request',function (req,res) {
    // res.setHeader('Content-Type','text/html;charset-utf-8');
    // res.write('<h1>hello-world</h1>');
    //localhost:8080/resource  直接按照情况格式来返回对应的css等资源文件

    //自定义一个render函数进行复用后面直接用res.render即可
    res.render= function (filename) {
        fs.readFile(res.render,function (e,data) {
            if(e){
                throw e;
            }
            res.setHeader('Content-Type',Mime.getType(req.url))
            res.end(data);
        })
    };

    if(req.url.startsWith('/resource') &&req.method == 'get'){
        res.render(path.join(__dirname,req.url));
        res.end();
    }

    if(req.url === '/baidu'){
        res.statusCode = 302;
        res.statusMessage = 'forword'
        res.setHeader('Location','http://baidu.com');
        res.end();
    }
    res.end();
})

server.listen(8080,function () {
    console.log('服务器启动了，请访问：http://localhost:8080')
})