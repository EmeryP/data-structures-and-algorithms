
'use strict';

const util = require('util');

class Hashmap {

  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }

  hash(key){
    return key.split('').reduce( (pv, cv) => pv + cv.charCodeAt(0), 0 ) % this.size; 
  }

  add(key, value){
    let hash = this.hash(key);

    if(! this.map[hash]){this.map[hash] = [];}

    this.map[hash].push({[key]: value})
  }

  find(key){
    let hash = this.hash(key)
    return this.map[hash];
  }

  contains(key){
    if(this.find(key)){
      return 'key currently exists in table';
    } return 'key not found';
  }

  getHash(key){
    let hash = this.find(key[i]);
    console.log(hash)
    // return this.map[hash];
  }

} 

let hm = new Hashmap(500);
hm.add('emery', 'parent');
hm.add('dax', 'child');

console.log(hm.map.findIndex(find('emery')));
// console.log(hm.find('emery'));