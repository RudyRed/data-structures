var Queue = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[JSON.stringify(count)] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var output = storage['0'];
    if (count > 0) {
      for (var i = 1; i < count; i++) {
        storage[JSON.stringify(i - 1)] = storage[i];
      }
      count--;
    }
    delete storage[JSON.stringify(count)];
    return output;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
