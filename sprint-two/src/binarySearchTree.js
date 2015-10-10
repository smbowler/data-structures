var BinarySearchTree = function(value){
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

    2
  /   \
        3
      /   \
            7
           /  \
          6

      expect(binarySearchTree.left.right.value).to.equal(3);  ????
      expect(binarySearchTree.right.left.value).to.equal(6);  ????


  depthFirstLog
    input: callback function, modifies a global array variable
    output: none, but global array variable gets modified



 * Complexity: What is the time complexity of the above functions?
 */
