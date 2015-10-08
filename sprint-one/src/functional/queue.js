var Queue = function(){
  var someInstance = {};
  var front = 0;
  var back = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    back++;
    someInstance[back] = value;
  };

  someInstance.dequeue = function(){
    if (front < back){
      front++;
      var result = someInstance[front];
      delete someInstance[front];
    }
    return result;
  };

  someInstance.size = function(){
    return (back - front);
  };

  return someInstance;
};


// q = {1: 'first', 2: 'second', 3: 'third'}