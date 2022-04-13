var Stack = function() {
  this.stack = {};
};

Stack.prototype.size = function () {
  return Object.keys(this.stack).length;
};

Stack.prototype.push = function (value) {
  this.stack[Object.keys(this.stack).length] = value;
};

Stack.prototype.pop = function () {
  var takeAway = this.stack[Object.keys(this.stack).length - 1];
  delete this.stack[Object.keys(this.stack).length - 1];
  return takeAway;
};