var express = require('express');
//模块其实即是函数又是中间件又是对象
var config = require('./config.js');
var route = require('./route.js');
var app = express();
app.use('/',route);

app.listen(config.port,function () {
    console.log('http://localhost:'+config.port)
})