'use strict';

module.exports = exports = {};

exports.map = (arr, callback) =>  {
  if(!arr) throw new Error('array not provided');
  if(!callback) throw new Error('callback not provided');
  return Array.prototype.map.call(arr, callback);
};

exports.filter = (arr, callback) => {
  if(!arr) throw new Error('array not provided');
  if(!callback) throw new Error('callback not provided');
  return Array.prototype.filter.call(arr, callback);
};

exports.concat = (arr1, arr2) => {
  if(!arr1) throw new Error('array not provided');
  return Array.prototype.concat.apply(arr1, arr2);
};

exports.reduce = (arr, callback, initVal) => {
  if(!arr) throw new Error('array not provided');
  if(!callback) throw new Error('callback not provided');
  return Array.prototype.reduce.call(arr, callback, initVal);
};

exports.splice = (arr, start, deleteCount, item) => {
  if(!arr) throw new Error('array not provided');
  if(!start) throw new Error('start not provided');
  return Array.prototype.splice.call(arr, start, deleteCount, item);
};
