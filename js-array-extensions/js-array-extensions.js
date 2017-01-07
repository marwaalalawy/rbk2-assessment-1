// your code here
var Array=function () {
	this.store=[];	
}
array.prototype.first=function(){
	var f=this.store[0];
	return f;
}

array.prototype.last=function(){
	var l=this.store[this.store.length-1]
	return l;
}
