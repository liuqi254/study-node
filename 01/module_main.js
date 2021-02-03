const add = require('./module_a.js');
console.log(add(10,20));
// 文件读取
// const fs = require('fs');
// fs.readFile('./01/module_a.js','utf-8',(err,doc)=>{
// 	console.log(err);
// 	console.log(doc);
// })

const path = require('path');
let finalpath = path.join(__dirname,'module_a');
console.log(finalpath)