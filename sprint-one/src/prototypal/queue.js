var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.queue = {};
  storage.count = 0;
  return storage;
};

queueMethods = {};

queueMethods.size = function () {
  console.log(Object.keys(this.queue).length);
  return Object.keys(this.queue).length;
};

queueMethods.enqueue = function (value) {
  this.queue[this.count] = value;
  this.count++;
};
queueMethods.dequeue = function () {
  var takeAway = this.queue[this.count - Object.keys(this.queue).length];
  delete this.queue[this.count - Object.keys(this.queue).length];
  return takeAway;
};