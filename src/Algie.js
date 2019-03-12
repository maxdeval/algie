function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};


function algie_before_max(array) {
  var sortedArray = _.sortBy(array)
/*  var arrayOfInteger = _.each(sortedArray, function(value){
    if (_.isInteger(value)) {
      console.log(value)
    }
  })*/
  var arrayOfInteger = _.map(sortedArray, function (value) {
    _.each(sortedArray, value) {
      if(_.isInteger(value)){
        return value
      }
    }
  })
  console.log(arrayOfInteger)
}

algie_before_max(["1", "z", 4, 3, 65, /^/, 42, 51, 12])
