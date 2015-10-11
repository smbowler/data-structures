var BinarySearchTree = function(value){
  var bstInstance = Object.create(BinarySearchTreeMethods);
  //Initialize the top node with a value of value
  //Creating a contents object that contains a new node with a value
  //bstInstance.contents = NodeMaker(value);
  bstInstance.value = value;
  bstInstance.left = {};
  bstInstance.right = {};

  return bstInstance;
};

var NodeMaker = function (value) {
  return {value: value, left: {}, right: {}};
};

var BinarySearchTreeMethods = { 

  insert: function(value){
    //create a node with this value
    var newNode = NodeMaker(value);

    var originalTree = this; //remove these 2?
    var targetNode = this;

    //put node onto tree in correct place (recursion)
    var recurse = function(node){
      if (node.value === undefined){
        node.value = value;
        node.right = {};
        node.left = {};
        console.log(originalTree);
        return;
      }
      //compare node.value with the newNode.value passed in
      //if it is newNode.value < node.value, save newNode to/ lefto

      //console.log(newNode.value, node.value);
      if (newNode.value < node.value){
        targetNode = targetNode.left;
        recurse(node.left);
      } else {
        targetNode = targetNode.right;
        recurse(node.right);
      }
      //if newNode.value > node.value, save newNode to right
    };

    recurse(this);
  },

  contains: function(value){
    var result = false;

    var recurse = function (node) {
      if (node.value === value) {
        result = true;
      }
      //base case
      if (node.right.value === undefined && node.left.value === undefined) {
        return;
      }
      if (value < node.value) {
        recurse(node.left);
      } else {
        recurse(node.right);
      }
    };

    recurse(this);

    return result;
  },

  depthFirstLog: function(fn){

    var recurse = function (node) {
      if (node.value) {
        fn(node.value);
      } else {
        return;
      }
      recurse(node.right);
      recurse(node.left);
    };

    recurse(this);

  }

};


/*
these ideas developed based on wikipedia page for bst
and the info in the SpecRunner.html

example_node = {
  value: 2
  left: {} // this is another node
  right: {} // this is another node
}
// so a call like bstInstance.left.right.value makes sense, returns a number



need methods: insert, contains, depthFirstLog

  contains
    input: number
    output: boolean
    strategy: recursion?
  
  insert
    input: number (repeatedly call to insert several, e.g., 2, 3, 7, 6)
    begins like a search
    "we examine the root and recursively insert the new node 
    to the left subtree if its key is less than that of the root, 
    or the right subtree if its key is greater than or equal to the root"

              5
            /   \
           2     7
          / \   / \
             3 6       
             /\/\ 

      expect(binarySearchTree.left.right.value).to.equal(3);  YES!
      expect(binarySearchTree.right.left.value).to.equal(6);  YES!

      {value : null
      left : {value: 2
              left: null
              right : 
              }
                    {   value: 3
                        left: null
                        right :7
                      }
                  


  depthFirstLog
    input: callback function, modifies a global array variable
    output: none, but global array variable gets modified



 * Complexity: What is the time complexity of the above functions?
 */
 //var bst = BinarySearchTree(5);
 //bst.insert(2);
 //console.log(bst);
