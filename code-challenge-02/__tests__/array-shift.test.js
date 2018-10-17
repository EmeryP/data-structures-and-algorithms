
const arrayShiftModule = require('../array-shift');

describe('insert the input value to the middle of the input array', () => {

  it('should check if the input array is empty', () => {
    const actual = arrayShiftModule.insertShiftArray([], 1);
    const expected = null;
    expect(actual).toBe(expected);
  });

  it('should check if the input number is empty', () => {
    const actual = arrayShiftModule.insertShiftArray([1,2,3], ' ');
    const expected = null;
    expect(actual).toBe(expected);
  });

  it('should check if newArray length is equal to inputArr length plus one', () => {
    const actual = arrayShiftModule.insertShiftArray([1,2,3], 4);
    const expected = 4;
    expect(actual.length).toBe(expected);
  });
  
});