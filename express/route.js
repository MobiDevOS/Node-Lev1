var express = require('express');
var handler = require('./handler.js');
var route = express.Router();


var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data


route.get('/add',function (req,res) {
    console.log('add function is action')
});

route.post('/post',function (req,res) {

});

route.get('/index',handler.index);

route.get('/first',handler.first);


route.post('/form', upload.array(), function (req, res, next) {
    console.log(req.body);
    res.json(req.body);
});


module.exports = route;