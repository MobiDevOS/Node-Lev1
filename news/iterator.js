var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);

// for (var x of a) { // 遍历Array
//     console.log(x);
// }
// for (var x of s) { // 遍历Set
//     console.log(x);
// }
// for (var x of m) { // 遍历Map
//     console.log(x[0] + '=' + x[1]);
// }


function  strMapToObj(strMap)
{
    let obj= Object.create(null);
    for (let[k,v] of strMap) {
        obj[k] = v;
    }

    return obj;
}

/**
 *map转换为json
 */
function  mapToJson(map)
{
    return JSON.stringify(strMapToObj(map));
}

console.log(JSON.parse(mapToJson(m)));



function  _objToStrMap(obj){
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k,obj[k]);
    }
    return strMap;
}
/**
 *json转换为map
 */
function  _jsonToMap(jsonStr){
    return this._objToStrMap(JSON.parse(jsonStr));
}

var a = ['A', 'B', 'C'];


// m.forEach(function (element, index, array) {
//     // element: 指向当前元素的值
//     // index: 指向当前索引
//     // array: 指向Array对象本身
//     console.log('key:'+index+'value:'+element);//'A','B','C'
// });
//
//
// s.forEach(function (element, index, array) {
//     // element: 指向当前元素的值
//     // index: 指向当前索引
//     // array: 指向Array对象本身
//     console.log('key:'+index+'value:'+element);//'A','B','C'
// });


//in在内容的处理,如果用of的话就能动态的追加内容

var testof = ['A', 'B', 'C'];
testof.name = 'Hello';
for (var x in testof) {
    console.log(x); // '0', '1', '2', 'name'
}

//
//https://blog.csdn.net/wzj0808/article/details/51392060



