const add = (n1,n2)=>{
	return n1+n2;
}

// exports.add =add;
//exports指向module.exports 
//但注意：不能直接将exports变量指向一个值，因为这样等于切断了exports与module.exports的联系。
module.exports = add;