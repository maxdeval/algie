function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_max_of_consecutive_in_array(array) {
  var counter = 0;
  _.each(array, function(value, key){
    if(value === value[key - 1]){
      counter += 1
    }
  })
  console.log(counter)

}

algie_max_of_consecutive_in_array(["a", "a", "c", "c", "c", "z"])
