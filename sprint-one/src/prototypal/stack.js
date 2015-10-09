var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someStack = Object.create(stackMethods);
  someStack.currentSize = 0;
  someStack.storage = {};

  return someStack;
};

var stackMethods = {
  push : function (value) {
    this.currentSize++;
    this.storage[this.currentSize] = value;
  },

  pop : function () {
    if (this.currentSize > 0) {
      // is result a copy of this.storage[this.currenSize]?
      // if it referred to the same thing, then returning result
      // would be undefined, right?
      /*
        [1, 2, 3]
        'hello'
        var result = this.storage[this.currentSize].slice();
      */
      var result = this.storage[this.currentSize];
      delete this.storage[this.currentSize];
      this.currentSize--;
    }
    return result;
  },

  size : function () {
    return this.currentSize;
  }

};


/*
Stack.prototype.push = function (value) {
  this.currentSize++;
  this.storage[this.currentSize] = value;
};
*/

/*
Stack.prototype.pop = function () {
  if (this.currentSize > 0) {
    // is result a copy of this.storage[this.currenSize]?
    // if it referred to the same thing, then returning result
    // would be undefined, right?

    var result = this.storage[this.currentSize];
    delete this.storage[this.currentSize];
    this.currentSize--;
  }
  return result;
};

Stack.prototype.size = function () {
  return this.currentSize;
};
*/
