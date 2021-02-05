const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/playground', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('数据库连接成功')
	})
	.catch(err => {
		console.log(err);
	});

const useSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String,
	password: String,
	hobbies: [String]
})
// 通过find查询集合中的所有文档，返回一组数据，返回数组
const User = mongoose.model('users', useSchema);
//User.find({name:'李四'}).then(res=>console.log(res));

// 通过findOne查询返回一条数据，返回对象
//User.findOne({name:'李四'}).then(res=>console.log(res));

//通过条件匹配$gt\$lt 查询年龄字段大于20小于50
//User.find({age:{$gt:20,$lt:50}}).then(res=>console.log(res));

//通过条件匹配包含 $in
//User.find({hobbies:{$in:['篮球']},age:20}).then(res=>console.log(res))

//选择要查询的字段 -_id前面加-表示不想查询
//User.find().select('name age -_id').then(res=>console.log(res))

//将查询出来的数据进行排序，根据年龄升序
// User.find().sort('age').then(res=>console.log(res));
//降序，前面加-
//User.find().sort('-age').then(res=>console.log(res));

//skip跳过多少条数据 limit限制查询数量
//User.find().skip(2).limit(2).then(res=>console.log(res))

//删除单个字段 查找到一条文档并且删除，如果多个，会删除第一个
// User.findOneAndDelete({_id:'5c09f2d9aeb04b22f846096b'}).then(res=>console.log(res))

// 删除多个,注意这个要极其的小心
 // User.deleteMany().then(res=>{
 // 	console.log(res);
 // })

//修改单个
// User.updateOne({name:'李四'},{name:'刘琦',age:'25'}).then(res=>{
// 	console.log(res)
// })

//修改多个
// User.updateMany({},{name:'刘琦',age:'25'}).then(res=>{
// 	console.log(res)
// })
const moment = require('moment');
console.log()
const postSchema = new mongoose.Schema({
	name: {
		type:String,
		required:[true,'请传入姓名'],
		// 传入字符串最小长度、最大长度
		minlength:2,
		maxlength:5,
		//去除字符创两边的空格
		trim:true
	},
	age: {
		type:Number,
		max:[100,'超出年龄限制'],
		min:0
	},
	email: String,
	password: String,
	hobbies: [String],
	publishDate:{
		type:String,
		// 默认赋值
		default:moment().format('YYYY-MM-DD HH:mm:ss'),
		trim:true
	},
	category:{
		type:String,
		// 枚举，列举出当前字段可以拥有的值
		// enum:['html','css','node.js']
		enum:{
			value:['html','css','node.js'],
			message:'分类名称须在一定范围内'
		}
	},
	author:{
		type:String,
		required:true,
		validate:{
			validator:v =>{
				//返回布尔值
				//true验证成功
				//false验证失败
				return v && v.length>4;
			},
			//自定义错误信息
			message:'传入的值不符合验证规则'
		}
	}
	
})

const Post = mongoose.model('Post',postSchema);
Post.create({name:'蔡竞',age:101,author:'liu'}).then(res=>{
	console.log(res);
}).catch(err=>{
	const error = err.errors;
	for(var attr in error){
		console.log(error[attr].message);
	}
})