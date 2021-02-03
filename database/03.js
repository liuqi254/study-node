const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true, useUnifiedTopology: true })
	.then(()=>{
		console.log('数据库连接成功')
	})
	.catch(err=>{
		console.log(err);
	});
	
const useSchema = new mongoose.Schema({
	name:String,
	age:Number,
	email:String,
	password:String,
	hobbies:[String]
})
// 通过find查询集合中的所有文档，返回一组数据，返回数组
const User = mongoose.model('User',useSchema);
User.find({name:'李四'}).then(res=>console.log(res));
// 通过findOne查询返回一条数据，返回对象
User.findOne({name:'李四'}).then(res=>console.log(res));