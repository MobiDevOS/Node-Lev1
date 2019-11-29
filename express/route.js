var express = require('express');
var handler = require('./handler.js');
var route = express.Router();

route.get('/add',function (req,res) {
    console.log('add function is action')
});

route.post('/post',function (req,res) {

});

route.get('/index',handler.index);
route.get('/first',handler.first);

module.exports = route;