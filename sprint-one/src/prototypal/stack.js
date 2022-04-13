var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  storage.stack = {};
  return storage;
};

var stackMethods = {};

stackMethods.size = function () {
  return Object.keys(this.stack).length;
};

stackMethods.push = function (value) {
  this.stack[Object.keys(this.stack).length] = value;
};

stackMethods.pop = function () {
  var takeAway = this.stack[Object.keys(this.stack).length - 1];
  delete this.stack[Object.keys(this.stack).length - 1];
  return takeAway;
};

