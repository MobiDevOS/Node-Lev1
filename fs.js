var fs = require('fs');
var path = require('path');

var absPath = path.join(__dirname,"test.txt");

fs.writeFile(absPath,"hello-world",'utf8',function(err){


});


var content = fs.readFile(absPath,'UTF-8',function(err,data){

    if(err){
        throw err;
    }
    console.log(data);
});


