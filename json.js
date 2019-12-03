var test = [{name:'zhang'},{name:'ceshi'},{name:'good'}];
console.log(JSON.stringify(test));

let jsonArr = [
    {
        "classid": "87",
        "classname": "办事处/华北区/北京办事处/北京客服部"
    },
    {
        "classid": "86",
        "classname": "办事处/华北区/北京办事处/北京销售部"
    }
]
let arr = [];
for (var i in jsonArr) {
    arr.push(jsonArr[i])
}

console.log(arr);