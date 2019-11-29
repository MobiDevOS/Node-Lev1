var express = require ('express')
var app = express();

app.get("/index",function (req,res) {
    res.end('helloworld');
});
app.listen('9090',function () {
    console.log('http://localhost:9090')
})