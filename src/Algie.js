function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};


function algie_array_of_boolean(array) {
  var result = [];
  var i = 0;
  var counter = 0;
  _.each(array, function(value, key) {
    while(i <= value) {
      if(value === counter) {
        result.push(true);
        counter += 1
      }
      else {
        result.push(false);
      }
      i++
    }
    console.log(i)
    i = 0;
  })
  console.log(result)

}

algie_array_of_boolean([0, 2])
