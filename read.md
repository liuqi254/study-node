###学习node
第一次测试git
##为什么选择node
1、因为node使用JS语法开发后端应用
2、公司要求前端开发掌握node
3、生态系统活跃，有大量开源库可以使用，提高工作效率
4、前端开发工具大多基于node开发
##什么是node
#node是基于谷歌V8引擎的JS代码运行环境
##node运行环境搭建
1、先下载安装node.exe，下载LTS稳定版本
2、PATH环境配置

##Node.js模块化开发
#JS开发弊端 文件依赖和命名冲突

1、规定一个JS文件就是一个模块，模块内部定义的变量和函数默认情况下在外部无法得到
2、exports对象进行成员导出，require导入其他模块

##Node.js系统模块
Node运行环境提供的API
#fs文件操作 
const fs = require('fs');
1、读取文件内容 fs.readFile('文件路径',['文件编码'],callback)
fs.readFile('./base.js','utf-8',(err,doc)=>{
	if(err == null){
		console.log(doc)
	}
})

2、写入文件内容 fs.writeFile('文件路径','数据',callback)
fs.writeFile('./base.js',content,err=>{
	if(err != null){
		console.log(err);
		return;
	}
	console.log('写入文件成功')
})
当写入文件路径不存在，会自动创建

#path 路径操作
1、为什么要路径拼接？
不同操作系统的路径分隔符不统一 windows是\ / Linux是/
2、路径拼接语法
path.join('路径','路径',.....)
3、相对路径VS绝对路径
大多数情况下使用绝对路径，使用__dirname获取当前文件的绝对路径，
使用path.join(__dirname,'文件路径')得到绝对路径

##第三方模块
