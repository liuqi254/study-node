const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true, useUnifiedTopology: true })
	.then(()=>{
		console.log('数据库连接成功')
	})
	.catch(err=>{
		console.log(err);
	});
// 创建集合规则
const cousrseSchema = new mongoose.Schema({
	name:String,
	author:String,
	isPublished:Boolean
})
//根据规则创建集合，构造函数
//参数1：集合名称
//参数2：集合规则
const Course = mongoose.model('Course',cousrseSchema) //course
// 向集合中插入文档另一种方式，**关于数据库的所有操作，都是异步操作
/* Course.create({
	name:"蔡竞",
	author:"刘琦",
	isPublished:true
},(err,doc)=>{
	console.log(err);
	console.log(doc);
}) */
//也可以使用promise
 Course.create({
	name:"刘琦",
	author:"蔡竞",
	isPublished:false
}).then(res=>{
	console.log(res)
}).catch(err=>{
	console.log(err)
})
/* 创建集合实例
const course = new Course({
	name:"node.js基础",
	author:"黑马讲师",
	isPublished:true
})
//调用save保存数据，_id是数据库生成唯一标识,__v 作用是可以在"save文档"时作为一个查询条件，
//避免在"取出数据"到"save数据"的这段时间内，数据被其他进程修改而导致冲突
course.save(); */