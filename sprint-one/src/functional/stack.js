var Stack = function(){
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    size++;
    someInstance[size] = value;
  };

  someInstance.pop = function(){
    var result = someInstance[size];
    delete someInstance[size];
    if (size > 0) {
      size--;    
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
