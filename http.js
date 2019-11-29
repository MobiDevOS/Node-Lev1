var http = require('http');
var server = http.createServer();
server.on('request',function (req,res) {
    // res.setHeader('Content-Type','text/html;charset-utf-8');
    // res.write('<h1>hello-world</h1>');


    res.writeHead('404','go out',{'Content-Type':'text/explain;charset-utf-8'})
    res.end();

})

server.listen(8080,function () {
    console.log('服务器启动了，请访问：http://localhost:8080')
})