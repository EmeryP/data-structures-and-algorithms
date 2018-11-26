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
    let keyArr = this.map[hash]
    for (let i = 0; i < keyArr.length; i++){
      let lookupKey = keyArr[i][key];
      if (lookupKey) {
        return lookupKey;
      }
    }
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

  serialize(hashmap){
    return JSON.stringify(hashmap);
  }

  // deSerialize(hashmap){
    
  // }

}

let hm = new Hashmap(1);
// hm.add('truck', 'silverado')
// hm.add('car', 'corvette')

hm.add('a');
hm.add('b');
// hm.add('c', 3);
// hm.add('d', 4);
// expect(hm.find('b')).toBe(2);
console.log(hm)
// console.log(hm.serialize(hm))
// let stringified = JSON.stringify(hm);
// console.log(stringified)
// console.log(JSON.parse(stringified))

module.exports = Hashmap;