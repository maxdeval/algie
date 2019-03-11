function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};


array = ["a", 30, "c"]
function algie_is_array_of_string(array) {
  var test = []
  _.each(array, function(value) {
    if(_.isString(value)) {
      test.push('true')
    }
    else {
      test.push('false')
    }
  })
  console.log(test)
}



algie_is_array_of_string(array)

