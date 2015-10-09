var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someQueue = Object.create(queueMethods);
  someQueue.front = 0;
  someQueue.back = 0;
  someQueue.storage = {};


  return someQueue;
};

var queueMethods = {
  
  enqueue : function(value){
   this. back++;
   this.storage[this.back] = value;
  },
  
  dequeue : function(){
    if (this.size() > 0){
      this.front++;
      var result = this.storage[this.front];
      delete this.storage[this.front];
    }
    return result;
  },

  size : function(){
    return this.back - this.front;
  }

};

//
// Queue.prototype.enqueue = function(value){
//   this.back++;
//   this.storage[this.back] = value;
// };

// Queue.prototype.dequeue = function(){
//   if (this.size() > 0){
//     this.front++;
//     var result = this.storage[this.front];
//     delete this.storage[this.front];
//   }
//   return result;
// };

// Queue.prototype.size = function(){
//   return this.back - this.front;
// };

