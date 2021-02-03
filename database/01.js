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
//创建集合实例
const course = new Course({
	name:"node.js基础",
	author:"黑马讲师",
	isPublished:true
})
//调用save保存数据，_id是数据库生成唯一标识,__v 作用是可以在"save文档"时作为一个查询条件，
//避免在"取出数据"到"save数据"的这段时间内，数据被其他进程修改而导致冲突
course.save();