function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};


function algie_before_max(array) {
  if(_.isArray(array))  {
    var arrayOfInteger = _.filter(array, function (value) {
      return _.isInteger(value)
    })
    var sortedArray = _.sortBy(arrayOfInteger)
    var beforeMax = sortedArray.length - 2
    return sortedArray[beforeMax]
  }
  else {
    return false
  }
}

algie_before_max(["1", "z", 4, 3, 65, /^/, 42, 51, 12])
