var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  /*
  list_instance = {
    head : {value: 4, next: 5},
    tail : {value: 5, next: null},
    {value: 4, next: 5},
    {value: 5, next: null},
  }

  list_instance = {
    head : {value: 4, next: {value:5, next:null}},
    tail : {value: 5, next: null},
  }  

  list_instance = {
    head : {value: 4, next: {value:5, next:{value:6, next:null}}},
    tail : {value: 6, next: null},
  }
  */

  list.addToTail = function(value){
    //list.head = list.tail;
    var newNode = Node();
    newNode.value = value;
        
    if (list.tail !== null) {
      var oldTail = list.tail;
      oldTail.next = newNode;
    } 

    if (list.head === null) {
      list.head = newNode;
    }

    list.tail = newNode;

  };

  list.removeHead = function(){
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target){
    var result = false;
    var currentNode = list.head;
    while(currentNode.next !== null){
      if (currentNode.value === target){
        result = true;
      }
      currentNode = currentNode.next;
    }
    if(currentNode.value === target){
      result = true;
    }
    return result;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
