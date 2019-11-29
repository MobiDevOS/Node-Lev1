var underscore = require('underscore');

var arrayName = ['张山','李四'];
var arrayAge =[30,14];
var zipContent = underscore.zip(arrayName,arrayAge);
var unZipContent = underscore.unzip(zipContent);
console.log(zipContent);

var html = '<h1><%=name%></h1>'

var templte = underscore.template(html);

var testTemplete = templte({name:'dood'});
console.log(testTemplete)