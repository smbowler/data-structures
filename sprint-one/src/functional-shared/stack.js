var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.currentSize = 0;

  obj.size = stackMethods.size;
  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;

  // var exampleObj = {1:'a', 2:'b', currentSize: 2, size: fnc, push}
  
  return obj;
};

var stackMethods = {
  push : function (value) {
    this.currentSize++;
    this[this.currentSize] = value;
  },

  pop : function () {
    if (this.currentSize > 0) {
      var result = this[this.currentSize];
      delete this[this.currentSize];
      this.currentSize--;
      return result;
    } 
  },

  size : function () {
    return this.currentSize;
  },

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
