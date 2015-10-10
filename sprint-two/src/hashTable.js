var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit); // getIndexBelowMaxForKey is our hash function
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

};

HashTable.prototype.remove = function(k){

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
  1. get (k, v) as input
  2. calculate index with hash function -> say it's 2
  3. hashtable_instance[2].push([k, v])

to retrieve,
  1. get k as input
  2. calculate index with hash function -> say it's 1
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
