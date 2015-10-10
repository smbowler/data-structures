

// ###Graph Solution

/*
G = {
  edgeList : [[1, 5], ...],
  nodeList : [1, 2, 3, 4, 5, 6]
}

*/


// Instantiate a new graph
var Graph = function(){
  this.nodeList = [];
  this.edgeList = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodeList.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var result = false;
  for (var i=0; i<this.nodeList.length; i++) {
    if (node === this.nodeList[i]) {
      result = true;
    }
  }
  return result;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var targetIndex = -1;
  for (var i=0; i<this.nodeList.length; i++) {
    if (node === this.nodeList[i]) {
      targetIndex = i;
      break;
    }
  }  
  this.nodeList.splice(targetIndex, 1);
  // probably need to remove edges from edgeList
  // probably want conditional to ensure that targetIndex > -1
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;
  for (var i=0; i<this.edgeList.length; i++) {
    if ((this.edgeList[i][0] === fromNode && this.edgeList[i][1] === toNode)|| (this.edgeList[i][1] === fromNode && this.edgeList[i][0] === toNode)){
      result = true;
    }
  }
  return result;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.edgeList.push([fromNode, toNode]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var targetIndex = -1;
  for (var i = 0; i < this.edgeList.length; i++){
    if (this.edgeList[i][0] === fromNode && this.edgeList[i][1] === toNode){
      targetIndex = i;
    }
  }
  if (targetIndex > -1){
    this.edgeList.splice(targetIndex, 1);  
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.nodeList.length; i++){
    cb(this.nodeList[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



