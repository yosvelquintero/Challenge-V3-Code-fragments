# Challenge V3 - Code fragments

## Requirements

NodeJS v6

## Install

Clone the repository and install the `devDependencies` by executing from the command line:

`$ npm install --only=dev`

Once installed, to run the Unit Tests execute:

`$ npm test`

Or you can directly type in the console:

`$ jasmine`


<br><br>

## 1. Part: Code fragments

General algorithms - the task is to finish the predefined code wrappers, thus they fulfill the requirements.

### 1.1. Sum of the two smallest numbers

#### Description

Given an array of numbers, you should compute the sum of the two smallest number values. You can assume that the array only contains
numbers, is never undefined and the array has min length of 2.

#### Fragment

``` javascript
function sumSmallestNumbers(numbers) {
  // your code
  return 0;
}
```

#### Test suite

``` javascript
describe('sumSmallestNumbers()', () => {
  it('should return the sum of the two smallest numbers', () => {
    expect(sumSmallestNumbers([1, 2, 3, 4])).toEqual(3);
    expect(sumSmallestNumbers([6, 7, 56, 2, 9, 34, 3])).toEqual(5);
    expect(sumSmallestNumbers([4, 4])).toEqual(8);
    expect(sumSmallestNumbers([5, 38, 15, 1, 1, -19, 9])).toEqual(-18);
    expect(sumSmallestNumbers([1, 1, 1, 1])).toEqual(2);
  });
});
```

<br><br>

### 1.2. Check if the amount of X and O in a string is the same

#### Description

Given an input string, you should check if the string contains the same amount of 'x' and 'o'. The case doesn't matter - if the amount is equal,
return a true otherwise return false.

#### Fragment

``` javascript
function sameXOAmount(str) {
  // your code
  return true;
}
```

#### Test suite

``` javascript
describe('sameXOAmount()', () => {
  it('should return `true` if number of `X` and `O` is equal', () => {
    expect(sameXOAmount('xXoO')).toEqual(true);
    expect(sameXOAmount('aAxXXbBoOo')).toEqual(true);
    expect(sameXOAmount('abc')).toEqual(true);
  });
  it('should return `false` if number of `X` and `O` is not equal', () => {
    expect(sameXOAmount('OaAxXbBoO')).toEqual(false);
    expect(sameXOAmount('xgXoXsdxOxz')).toEqual(false);
    expect(sameXOAmount('aaAmmMxMM')).toEqual(false);
  });
});
```

<br><br>

### 1.3. Get the number which occurs an odd number of times

#### Description

Given an array of numbers, you should find the number which occurs an odd number of times within the array. You can assume that there is
always just one number with an odd amount. Furthermore the array is never undefined and contains only numbers.

#### Fragment

``` javascript
function findOddAmount(numbers) {
  // your code
  return 0;
}
```

#### Test suite

``` javascript
describe('findOddAmount()', () => {
  it('should return the number which occurs with an odd frequency', () => {
    expect(findOddAmount([1, 2, 2, 3, 3])).toEqual(1);
    expect(findOddAmount([8, 8, 7, 7, 7])).toEqual(7);
    expect(findOddAmount([10, 3, 3, 10, 6, 10, 6, 1, 1])).toEqual(10);
  });
});
```
