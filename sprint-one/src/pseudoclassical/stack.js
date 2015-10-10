var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.currentSize = 0;

};

Stack.prototype.push = function(value){
  this.currentSize++;
  this.storage[this.currentSize] = value;
}; 

Stack.prototype.pop = function(){
  if (this.currentSize > 0) {  
    var result = this.storage[this.currentSize];  
    delete this.storage[this.currentSize];
    this.currentSize--;   
  }
  return result;
}; 

Stack.prototype.size = function(){
  return this.currentSize;
};


/*
need

properties:
  storage
  currentSize

methods:
  push
  pop
  size  
*/