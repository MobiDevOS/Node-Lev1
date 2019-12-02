var express = require('express');
//模块其实即是函数又是中间件又是对象
var config = require('./config.js');
var route = require('./route.js');

var mongo = require('./mongodb.js');
var app = express();


var bodyParser = require('body-parser');

var jsonParser = bodyParser.urlencoded({ extended: true })
// create application/x-www-form-urlencoded parser
//  var urlencodedParser = bodyParser.urlencoded({ extended: true })


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.post('/form',jsonParser, function(req, res) {
    if (!req.body) return res.sendStatus(400);



    // console.log('Username: ' + req.body.username);
    // console.log('Password: ' + req.body.password);

    var jsonResult = {result: 'success', data: req.body};
    var jsonData = JSON.stringify(req.body);
    console.log('result: ' + jsonData);
    // var data = {'username':'122323','password':'1232132'};
    mongo.save('scuser',JSON.parse(jsonData),function (e) {
        console.log(e)
    })
    res.json(jsonResult);
});

app.listen(config.port,function () {
    console.log('http://localhost:'+config.port)
})