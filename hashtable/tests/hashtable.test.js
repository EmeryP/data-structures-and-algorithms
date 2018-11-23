'use strict'

const Hashmap = require('../hashtable.js')

describe('Hashtables', () => {

  describe('Hashmap class', () => {
    it('should create a hashmap with a size of 50', () => {
      let hm = new Hashmap(50);
      expect(hm.size).toEqual(50);
    })
  })

  describe('Add', () => {
    it('should add an item to the hashtable in the correct location', () => {
      let hm = new Hashmap(50);
      hm.add('truck', 'f150');
      hm.add('car', 'camry');
      expect(hm.map[3]).toEqual([ { truck: 'f150' } ]);
    })

    it('should add another item to the hashtable in the correct location', () => {
      let hm = new Hashmap(50);
      hm.add('truck', 'f150');
      hm.add('car', 'camry');
      expect(hm.map[10]).toEqual([ { car: 'camry' } ]);
    })

    it('should verify the length of the hashtable is accurate', () => {
      let hm = new Hashmap(50);
      hm.add('truck', 'f150');
      hm.add('car', 'camry');
      expect(hm.map.length).toEqual(50);
    })
  })

  describe('Find', () => {
    it('should find the correct value when searching for a key in the hashtable', () => {
      let hm = new Hashmap(500);
      hm.add('truck', 'silverado');
      hm.add('car', 'mustang');
      expect(hm.find('truck')).toEqual('silverado');
    })

    it('should find the correct value when searching for a key in the hashtable', () => {
      let hm = new Hashmap(500);
      hm.add('truck', 'silverado');
      hm.add('car', 'mustang');
      expect(hm.find('car')).toEqual('mustang');
    })

    it('should find the correct value when searching for a key in the hashtable', () => {
      let hm = new Hashmap(50);
      hm.add('truck', 'f150');
      hm.add('car', 'camry');
      hm.add('turkey', 'german')
      expect(hm.find('turkey')).toEqual('german');
    })
  })

  describe('Contains', () => {
    it('should return true', () => {
      let hm = new Hashmap(100);
      hm.add('truck', 'silverado');
      hm.add('car', 'mustang');
      expect(hm.contains('truck')).toEqual(true);
    })

    it('should return false', () => {
      let hm = new Hashmap(100);
      hm.add('truck', 'silverado');
      hm.add('car', 'mustang');
      expect(hm.contains('turtles')).toEqual(false);
    })

    it('should return true', () => {
      let hm = new Hashmap(10);
      hm.add('truck', 'f150');
      hm.add('car', 'camry');
      hm.add('turkey', 'german')
      expect(hm.contains('turkey')).toEqual(true);
    })
  })

  describe('getHash', () => {
    it('should return the correct hash of the key', () => {
      let hm = new Hashmap(100);
      hm.add('truck', 'silverado');
      hm.add('car', 'mustang');
      expect(hm.getHash('truck')).toEqual(53);
    })

    it('should return the corrected hash if the size of the hashmap changes', () => {
      let hm = new Hashmap(200);
      hm.add('truck', 'silverado');
      hm.add('car', 'mustang');
      expect(hm.getHash('truck')).toEqual(153);
    })

    it('should return a different hash for a different key', () => {
      let hm = new Hashmap(100);
      hm.add('truck', 'f150');
      hm.add('car', 'camry');
      hm.add('turkey', 'german')
      expect(hm.getHash('turkey')).toEqual(76);
    })
  })
})