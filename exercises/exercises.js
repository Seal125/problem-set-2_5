// Question 1
const shoutout = function(array) {
  return array;
};

// Question 2
const reverseArray = function(array) {
  let copy = [];
  for (let i = array.length - 1; i >= 0; i--) {
    copy[copy.length] = array[i];
  }
  return copy;
};

// Question 3
const indexOf = function(array, value) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (value == array[i]) {
      result = i;
      break;
    }
    else {
      result = -1;
    }
  }
  return result;
};

// Question 4
const join = function(array, separator = ",") {
  let string = "";
  for (let i = 0; i < array.length; i++) {
    string += array[i];
    
    if (i !== array.length - 1) {
      string += separator;
    }
  }
  return string;
};

// Question 5
const push = function(array, value) {
  array[array.length] = value;
  return array.length;
};

// Question 6
const pop = function(array) {
  let lastElement = array[array.length - 1];
  array.length = array.length - 1;
  return lastElement;
};

// Question 7
const unshift = function(array, value) {
  for (let i = array.length - 1; i >= 0; i--) {
    array[i + 1] = array[i];
  }
  array[0] = value;
  return array.length;
};

// Question 8
const shift = function(array) {
  let firstElement = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return firstElement;
};

// Question 9
const lastIndexOf = function(array, value) {
  let result = 0;
  for (let i = array.length; i >= 0; i--) {
    if (value == array[i]) {
      result = i;
      break;
    }
    else {
      result = -1;
    }
  }
  return result;
};

// Question 10
const slice = function(array, start = 0, end = array.length) {
  let copy = [];
  for (let i = start; i < end; i++) {
    push(copy, array[i]);
  }
  return copy;
};

// Question 11
const splice = function(array, start, remove) {
  let values = slice(array, start, start + remove);
  for (let i = start; i < array.length; i++) {
    array[i] = array[i + remove];
  }
  array.length = array.length - remove;
  return array;
};

// Question 12
const spliceForReal = function(array, start, remove, ...items) {
  let splicedArray = splice(array, start, remove);
  let rhs = slice(array, 1);
  splicedArray.length = 1;
  
  for (let i = 0; i < items.length; i++) {
    push(splicedArray, items[i]);
  }
  for (let i = 0; i < rhs.length; i++) {
    push(splicedArray, rhs[i]);
  }
  return splicedArray;
};

// Question 13
const concat = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    push(firstArray, secondArray[i]);
  }
  return firstArray;
};

// Question 14
const shallowCompare = function() {

};

// Question 15
const deepCompare = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if(Array.isArray(array1[i])) {
      if(!shallowCompare(array1[i], array2[i])) return false;
    } else {
      if(array1[i] !== array2[i]) return false;
    }
  }
  return true;
};

shoutout();

// Write all your code ABOVE this line
module.exports = {
  reverseArray,
  indexOf,
  join,
  push,
  pop,
  unshift,
  shift,
  lastIndexOf,
  slice,
  splice,
  spliceForReal,
  concat,
  shallowCompare,
  deepCompare,
};
