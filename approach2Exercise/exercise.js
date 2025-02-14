"use strict";

/**
 * Calculates the combined length of two arrays
 */
const combinedLength = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return new Error("Both arguments must be arrays");
  }
  return a.length + b.length;
};

/**
 * Sums numbers in an array
 */
const sumArray = (xs) => {
  if (!Array.isArray(xs)) {
    return new Error("The given argument is not an array");
  }
  if (xs.length === 0) return 0;
  if (!xs.every((item) => typeof item === "number")) {
    return new Error("All elements in the array must be numbers");
  }
  return xs.reduce((acc, item) => acc + item, 0);
};

/**
 * Returns a formatted string  about the combined arrays
 */
const combineAndPrint = (a, b) => {
  const lengthResult = combinedLength(a, b);
  if (lengthResult instanceof Error) {
    return "Invalid arguments: both arguments must be arrays";
  }

  const sumResult = sumArray([...a, ...b]);
  if (sumResult instanceof Error) {
    return "Invalid arguments: all elements in the array must be numbers";
  }

  return `Combined length: ${lengthResult}; Combined sum of elements: ${sumResult}`;
};

/**
 * Wraps given function in error check
 */
const wrapErrorCheck = (fn) => (...args) => {
  const result = fn(...args);
  return result instanceof Error ? undefined : result;
};

module.exports = {
  combinedLength,
  sumArray,
  combineAndPrint,
  wrapErrorCheck,
};
