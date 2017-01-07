// your code here
var ArrayExtension=function () {
	this.store=[];	
}
ArrayExtension.prototype.first=function(){
	var f=this.store[0];
	return f;
}

ArrayExtension.prototype.last=function(){
	var l=this.store[this.store.length-1]
	return l;
}
