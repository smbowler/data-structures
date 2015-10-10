var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit); // getIndexBelowMaxForKey is our hash function, generates index to store input
  //Accessing the storage of the hashtable instance at the index provided by the hash function, if undefined, set it equal to []
  if (this._storage.get(i) === undefined) {
    this._storage.set(i, []);
  }
  //Initialize variable that captures the empty array
  var arrAtAddressI = this._storage.get(i);
  //Insert new key value pair into accessed array

  /*
  if ['bob', 'barker'] in arrAtAddressI, then overwrite with ['bob', 'dole']
  if [k1, v1] in the array, and adding [k2, v2] and k1 === k2, then overwrite
  */
  for (var j = 0; j<arrAtAddressI.length; j++) {
    if (arrAtAddressI[j][0] === k) {
      arrAtAddressI[j][1] = v;
    }
  }
  arrAtAddressI.push([k,v]); // check if same key is already in there
  this._storage.set(i, arrAtAddressI); // [[k,v]]

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arrAtAddressI = this._storage.get(i);
  for (var j = 0; j <arrAtAddressI.length; j++){
    if (arrAtAddressI[j][0] === k){
      return arrAtAddressI[j][1];
    }
  }
  
  //return this._storage.get(i)[1];
};

HashTable.prototype.remove = function(k){
  //in order to remove key value pair, we need to 'get' it
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arrAtAddressI = this._storage.get(i);
  for (var j = 0; j <arrAtAddressI.length; j++){
    if (arrAtAddressI[j][0] === k){
      arrAtAddressI[j][1] = null;
    }
  }
  this._storage.set(i, arrAtAddressI);
};



/*
 * Complexity: What is the time complexity of the above functions?

hashtable_instance will look like:

hashtable_instance = [ 
                        [      [k,v], [k,v], [k,v]          ],  
                        [      [k,v], [k,v]                 ],    
                        [                                   ],   
                        [      [k,v]                        ]       
                                                                           ];

so to insert, 
  1. get (cat, mean) as input
  2. calculate index with hash function -> say it's 2
  3. hashtable_instance[2].push([k, v])

to retrieve,
  1. get cat as input
  2. calculate index with hash function -> say it's 2
  3. target_array = hashtable_instance[1]
  4. search through target array for key
    for key_value_tuple in target_array:
      key = key_value_tuple[0]
      if (key === k) {
        return key_value_tuple[1]; // the value
      }

to remove,
  1. get k as input
  2. calculate index with hash function -> say it's 1
  3. target_array = hashtable_instance[1]
  4. search through target array for key
    for key_value_tuple in target_array:
      key = key_value_tuple[0]
      if (key === k) {
        remove key_value_tuple // maybe by .splice method??
      }

 */
