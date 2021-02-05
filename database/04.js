const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true, useUnifiedTopology: true })
	.then(()=>{
		console.log('连接数据库成功')
	})
	.catch((err)=>{
		console.log(err)
	})
	


const User2 = mongoose.model('user2',new mongoose.Schema({
	name:String
}));

const Post2 = mongoose.model('post2',new mongoose.Schema({
	title:String,
	author:{
		// _id
		type:mongoose.Schema.Types.ObjectID,
		// 当前字段关联的集合
		ref:'user2'
	}
}));
//创建用户
// User2.create({
// 	name:'刘琦'
// }).then(res=>console.log(res))
//创建文章
// Post2.create({
// 	title:'学习node.js',
// 	author:'601d30f4d83cca4191eb1c45'
// }).then(res=>console.log(res))
//查询
Post2.find().populate('author').then(res=>console.log(res))