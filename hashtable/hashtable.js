'use strict';

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
    return this.map[hash][0][key];
  }

  contains(key){
    try {
      if(this.find(key)){
        return true;
      } 
    } catch (error) {
      return false;
    }
  }


  getHash(key){
    let hash = this.hash(key);
    return hash;
  }

}

module.exports = Hashmap;