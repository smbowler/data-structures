var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  // your code here
  newTree.children = [];  // fix me

  return newTree;


  /*
  tree_instance = {
    value : value,
    children : [
                  {value: val, children: []}, 
                  {value: val, children: []}, 
                  {value: val, children: []}
                                                ]
  }
  */


};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree();
  child.value = value;
  this.children.push(child);
};

treeMethods.contains = function(target){
  var result = false;

  var recurse = function (node) {
    //check base case: is length of childrenarray == 0?
    if (node.value === target) {
      result = true;
    }
    if (node.children.length) {
      for (var i = 0; i < node.children.length; i++){
        recurse(node.children[i]);
      }
    }

    /*
    if (node.children.length === 0) {
      return;
    }
    for (var i=0; i<node.children.length; i++) {
      recurse(node.children[i]);
    }
    */    
  };

  //console.log(this);
  recurse(this);

  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?

probably newTree.children will be an array


 */
