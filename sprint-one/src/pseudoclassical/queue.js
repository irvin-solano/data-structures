var Queue = function() {
  this.queue = {};
  this.count = 0;
};

Queue.prototype.size = function () {
  console.log(Object.keys(this.queue).length);
  return Object.keys(this.queue).length;
};

Queue.prototype.enqueue = function (value) {
  this.queue[this.count] = value;
  this.count++;
};
Queue.prototype.dequeue = function () {
  var takeAway = this.queue[this.count - Object.keys(this.queue).length];
  delete this.queue[this.count - Object.keys(this.queue).length];
  return takeAway;
};

