

var binSearch = require('./array-binary-search.js');

it('should test if return value is included in array', () => {
  const actualOne = [1,2,4,8,16,32,44,99,115,390];
  const actualTwo = 2;
  expect( binSearch.binarySearch(actualOne, actualTwo)).toBe(1);
});
