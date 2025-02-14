"use strict";

const { error } = require("tape/lib/test");

/*
 * 1. W  rite a function that calls its callback with an error if called with invalid arguments
 *
 * Fill in the body of the function `combinedLength`, which should execute the given
 * callback with (null, the combined length of two arrays) if it receives correct
 * arguments, and  otherwise should execute its callback with (an appropriate error).
 */
/**
 * Calculates the combined length of two arrays
 * @param   {Array}     a  First array
 * @param   {Array}     b  Second array
 * @param   {Function}  cb Callback
 * @returns {undefined}    Nothing
 */
const combinedLength = (a, b, cb) => {
  if (!Array.isArray(a)) {
    return cb(
      new TypeError(`Invalid arguments: both arguments must be arrays`)
    );
  }
  if (!Array.isArray(b)) {
    return cb(
      new TypeError(`Invalid arguments: both arguments must be arrays`)
    );
  } else {
    const combinedArrayLength = a.concat(b).length;
    // const sum = combinedArray.reduce((acc, item) => acc + item, 0);

    return cb(null, combinedArrayLength);
  }
};

const combineLengthAndPrint = (a, b) => {
  combinedLength(a, b, (error, result) => {
    if (error) {
      console.log(`${error.message}`);
    } else {
      console.log(`Combined length: ${result};`);
    }
  });
};

const a = [1, 2, 3];
const b = [1, 2, 3];
combineLengthAndPrint(a, b);

/*
 * 2. Write a function that sums the numbers in an array and calls its
 *    callback with an error if called with invalid arguments
 *
 * Fill in the body of the function `sumArray`, which should execute the given
 * callback with (null, the sum of all the elements in the input array). If it
 * receives incorrect arguments, it should execute its callback with (an error).
 *
 * Note that all elements of the input array must be numbers.
 */

/**
 * Sums numbers in an array
 * @param   {Array}    xs list of numbers
 * @param   {Function} cb Callback
 * @returns {undefined}   Nothing
 */

const sumArray = (xs, cb) => {
  if (!Array.isArray(xs)) {
    return cb(new TypeError("The given argument is not an array"));
  }
  if (xs.length === 0) return cb(null, 0);
  if (!xs.every((item) => typeof item === "number")) {
    return cb(new TypeError("All elements in the array must be numbers"));
  }
  return cb(
    null,
    xs.reduce((acc, item) => acc + item, 0)
  );
};
const sumArrayAndPrint = (xs) => {
  sumArray(xs, (error, result) => {
    if (error) {
      console.log("something went wrong!!");
      console.log(error);
    } else if (result) {
      console.log("Operation Completed successfully");
      console.log(result);
    }
  });
};

sumArrayAndPrint(b);
/*
 * 3. Write a function that handles errors returned by (1) and (2)
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
 * @param   {Array}    a  First array
 * @param   {Array}    b  Second array
 * @param   {Function} cb Callback
 * @returns {undefined}   Nothing
 */

const combineAndPrint = (a, b, cb) => {
  combinedLength(a, b, (err1, L) => {
    if (err1) {
      return cb(err1.message);
    }
    const combined = a.concat(b);
    sumArray(combined, (err2, S) => {
      if (err2) {
        return cb(err2.message);
      }
      cb(null, `Combined length: ${L}; Combined sum of elements: ${S}`);
    });
  });
};

module.exports = {
  combineAndPrint,
  combinedLength,
  sumArray,
};
