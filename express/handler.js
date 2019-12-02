//业务封装的模块
let esj = require('ejs');
let path = require('path');
let form = require('./Form.js');

//首页业务模块封装
module.exports.index=function (req,res) {
    esj.renderFile(path.join(__dirname,'htmls','index.html'),{title:'zhujohnle'},function (e,data) {
        console.log(data);
        res.send(data);
    });
    console.log('first page init')
}


//首页业务模块封装
module.exports.first=function (req,res) {
    let user = {name: 'zhangsan'};
    esj.renderFile(path.join(__dirname,'htmls','first.html'),{title:'zhujohnle',user:user},function (e,data) {
        if(e){
            throw  e;
        }
        console.log(data);
        res.send(data);
    });
    console.log('first page init')
}