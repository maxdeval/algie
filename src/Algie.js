function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_array_with_same_values(array1, array2) {
  if(_.isArray(array1) && _.isArray(array2)) {
    if(_.isEqual(array1, array2)) {
      return true
    }
    else if( _.isEmpty(_.xor(array1, array2))) {
      return true
    }
    else if( !_.isEqual(array1, array2)) {
      return false
    }
  } 
  else {
    return false
  }
}

