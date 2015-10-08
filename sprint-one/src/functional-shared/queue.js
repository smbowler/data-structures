var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someQueue = {};
  someQueue.front = 0;
  someQueue.back = 0;
  someQueue.storage = {};
  someQueue.size = queueMethods.size;

  return someQueue;
};

var queueMethods = {
  
  enqueue: function(value){
    this.back++;
  },

  //dequeue: function(){},

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