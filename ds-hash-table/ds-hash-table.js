var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      var index=hashFn(key,max);
      var bigInd=_storage[index] ;
      if(bigInd){
        for(var i=0;i<_storage.length;i++){
          if(smallInd[0] === key) {
            return smallInd[1];
          }
        }
        return undefined;
      }
    },

    insert: function(key, value) {
      var index=hashFn(value,max);
      var x=_storage[index];
      
      var flag=true;
      for(var i=0; i<x.length; i++){
        var t=x[i];
        if(t[0] === k) {
          t[1]=v;
          flag = false;
        }
      }
      if(flag){
        var t = [k , v];
        x.push(t);
      }

      this._storage.set(index, x);
    }
  }
}
// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};