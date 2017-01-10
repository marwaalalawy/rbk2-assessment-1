var Stack = function() {
	var instance=Object.create(methods);
	instance._storage=[];
	return instance;
};

var methods={};

methods.add=function(value){
	this._storage.unshift(value);
}

methods.remove=function(){
		var del=this._storage[0];
		this._storage.shift();
		return del;
}