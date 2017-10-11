var Stack = function() {
  var someInstance = {};
  var count = 0;
  //var lastIn = undefined
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[JSON.stringify(count)] = value;
    count++;
  };

  someInstance.pop = function() {
  var output = storage[JSON.stringify(count - 1)];
  delete storage[JSON.stringify(count - 1)];
  if (count > 0) {
      count--;
    }
    return output;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
