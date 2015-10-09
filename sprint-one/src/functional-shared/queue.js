var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someQueue = {};
  someQueue.front = 0;
  someQueue.back = 0;
  someQueue.storage = {};
  someQueue.size = queueMethods.size;
  someQueue.enqueue = queueMethods.enqueue;
  someQueue.dequeue = queueMethods.dequeue;

  return someQueue;
};

var queueMethods = {
  
  enqueue: function(value){
    this.back++;
    this.storage[this.back] = value;
  },

  dequeue: function(){
    //Must invoke size function to access value;
    if (this.size() > 0){
      this.front++;
      var result = this.storage[this.front];
      delete this.storage[this.front];
    }
    return result;
  },

  size: function(){
    return this.back - this.front;

  }

};


/*
var Car = function (loc) {
  var obj = {loc:loc};
  extend(obj, Car.methods);
  return obj;
};
Car.methods = {
  var move : function () { this.loc++; },
  var off : function () { return; }
};

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();

*/