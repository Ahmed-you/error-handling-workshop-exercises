"use strict";

const { it } = require("node:test");

/*
 * 1. Write a function that throws an error if called with invalid arguments
 *
 * Fill in the body of the function `combinedLength`, which should return
 * the combined length of two arrays if it receives correct arguments, and
 * otherwise should throw an appropriate error.
 */

/**
 * Calculates the combined length of two arrays
 * @param   {Array} a First array
 * @param   {Array} b Second array
 * @returns {Number}  Combined length of a and b
 */
const combinedLength = (a, b) => {
  if (!Array.isArray(a)) {
    throw new TypeError(`The First Argument (a)=>'${a}' is not an array `);
  }
  if (!Array.isArray(b)) {
    throw new TypeError(`The Second Argument (b)=>'${b}' is not an array`);
  }

  return a.length + b.length;
};

/*
 * 2. Write a function that sums the numbers in an array and throws an error
 *    if called with invalid arguments
 *
 * Fill in the body of the function `sumArray`, which should return
 * the sum of all the elements in the input array. If it receives incorrect
 * arguments, it should throw an error.
 *
 * Note that all elements of the input array must be numbers.
 */

/**
 * Sums numbers in an array
 * @param   {Array} xs list of numbers
 * @returns {Number}   sum of list
 */
const sumArray = (xs) => {
  if (!Array.isArray(xs)) {
    throw new TypeError(`the givin argument '${xs}' is not an array `);
  }
  xs.forEach((item) => {
    if (typeof item != "number") {
      throw new TypeError(
        `this element in the givin Array is not a number =>'${item}'`
      );
    }
  });

  return xs.reduce((acc, item) => acc + item, 0);
};
/*
 * 3. Write a function that catches errors thrown by (1) and (2)
 *
 * Fill in the body of the function `combineAndPrint`, which should find the
 * combined length of two arrays and the total sum of all their elements.
 * If an error occurs, the function should instead print a useful message
 * explaining what went wrong.
 */

/**
 * Returns a string of the format
 *   "Combined length: L; Combined sum of elements: S"
 * Where L is the combined length of the two arrays and S is the sum of the elements of the array
 *
 * The function should use `combinedLength`. In the case of invalid inputs, the
 * function should return the string
 *   "Invalid arguments: both arguments must be arrays"
 * @param   {Array}  a First array
 * @param   {Array}  b Second array
 * @returns {String}   Message about the combined arrays
 */
const combineAndPrint = (a, b) => {
  try {
    if (!Array.isArray(a)) {
      throw new TypeError(`Invalid arguments: both arguments must be arrays`);
    }
    if (!Array.isArray(b)) {
      throw new TypeError(`Invalid arguments: both arguments must be arrays`);
    }

    const combinedArray = a.concat(b);
    const sum = combinedArray.reduce((acc, item) => acc + item, 0);
    return `Combined length: ${combinedArray.length}; Combined sum of elements: ${sum}`;
  } catch (error) {
    return error.message;
  }
};

/*
 * **Stretch goal -- Harder -- Optional**
 *
 * 4. Write a function that wraps another function in try/catch
 *
 * Fill in the body of the function `wrapTryCatch`, which takes a function `fn1`
 * as   an argument and returns another function `fn2` which wraps the first in
 * a try/catch statement.
 *
 * `fn2` should behave exactly like `fn1` except in the case where `fn1` throws an
 * error, in which case `fn2` should simply return `undefined`
 */

/**
 * Wraps given function in try/catch statement
 * @param  {Function} fn Function to wrap
 * @return {Function}    Wrapped function
 */
const wrapTryCatch = (fn) => {
  return (...args) => {
    try {
      return fn(...args);
    } catch (error) {
      return undefined;
    }
  };
};

// Example usage:
const riskyFunction = (num) => {
  if (num < 0) throw new Error("Negative number not allowed");
  return num * 2;
};

const safeFunction = wrapTryCatch(riskyFunction);

console.log(safeFunction(5)); // Output: 10
console.log(safeFunction(-3)); // Output: undefined

module.exports = {
  combinedLength,
  sumArray,
  combineAndPrint,
  wrapTryCatch,
};
