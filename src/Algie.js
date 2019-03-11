function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_all_multiply_by(array, number) {
  if( _.isArray(array) && _.isInteger(number)) {
    return _.map(array, function(value) { 
      return value * number 
    })  
  }
  else { 
    return _.toArray(array)
  }
}


