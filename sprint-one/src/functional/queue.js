var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function () {
    if (count - Object.keys(storage).length < 0) {
      return;
    }
    var takeAway = storage[count - Object.keys(storage).length];
    delete storage[count - Object.keys(storage).length];
    return takeAway;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};
