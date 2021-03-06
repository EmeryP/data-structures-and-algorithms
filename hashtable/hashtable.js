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

  deSerialize(hashmap){
    let newHM = hashmap.serialize(hashmap)
    let parsedHM = JSON.parse(newHM)
    let newHashmap = new Hashmap(hashmap.size)

    let filteredMap = parsedHM.map.filter( (value, idx) => {
        if(value !== null){
          let key = Object.keys(value[0])[0];
          let targetValue = value[0][key]
          newHashmap.add(key, targetValue)
        }
    })
    return newHashmap;
  }
}

// let hm = new Hashmap(10);
// hm.add('truck', 'silverado')
// hm.add('car', 'corvette')

// hm.add('a', 1);
// hm.add('b', 2);
// hm.add('c', 3);
// hm.add('d', 4);
// console.log(hm)
// expect(hm.find('b')).toBe(2);

// console.log(hm.serialize(hm))
// console.log(hm.deSerialize(hm))
// let stringified = JSON.stringify(hm);
// console.log(stringified)
// console.log(JSON.parse(stringified))

module.exports = Hashmap;