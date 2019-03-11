function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_multiply_each(array1, array2) {
  if( _.isArray(array1) && _.isArray(array2) && array1.length === array2.length) { 
    var result = [];
    _.each(array1, function(value, key) {
      result[key] = value * array2[key]; 
    })
    return result;
  }
  else {
    return false
  }
}


