function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_is_array_of_string(array) {
  if (_.isArray(array)) {

    var arrayOfBooleans = [];

    _.each(array, function(value) {
      if(_.isString(value)) {
        arrayOfBooleans.push(true)
      }
      else {
        arrayOfBooleans.push(false)
      }
    })

    if (_.includes(arrayOfBooleans, false)) {
      return false
    }
    else {
      return true
    }
  }
  else {
    return false
  } 
}


