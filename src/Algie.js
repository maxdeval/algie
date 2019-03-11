function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_reversed_index(array, index) {
  if(_.isArray(array) && _.isInteger(index)) {
    return (_.reverse(array))[index]   
  }
  else {
    return _.toInteger(array)
  }
}



