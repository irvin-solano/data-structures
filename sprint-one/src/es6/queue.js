class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue (value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue () {
    if (this.count - Object.keys(this.storage).length < 0) {
      return;
    }
    var takeAway = this.storage[this.count - Object.keys(this.storage).length];
    delete this.storage[this.count - Object.keys(this.storage).length];
    return takeAway;
  }

  size () {
    return Object.keys(this.storage).length;
  }

}
