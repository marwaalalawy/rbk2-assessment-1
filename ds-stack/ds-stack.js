var Stack = function() {
	var instance=Object.create(methods);
	instance._storage=[];
	return instance;
};

var methods={};

methods.add=function(value){
	this._storage.push(value);
}

methods.remove=function(){
	if(this.counter>0){
		this._storage.pop();
	}
}