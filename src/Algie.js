function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_largest_string(array) {
  if(_.isArray(array)){
    var length = 0;
    var largestString = "";
    _.each(array, function(value , key) {
      if(_.isString(value)){
        if(array[key].length > length) {
          length = array[key].length;
          largestString = array[key];
        }       
      }
      else {
        throw "A value in the array is not a string";
      }
    })
    return largestString;    
  }
  else {
    return false;
  }
}


