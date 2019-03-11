function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_few_of(array) {
  var counter = 0;
  _.each(array, function(value){
    if(value === true) {
      counter = counter + 1;
    }
  })
  console.log(counter)
  if(counter === array.length){
    return false;
  }
  if (_.includes(array, true)) {
    return true
  }
  else {
    return true;
  }
}


algie_few_of([true, true, true])

