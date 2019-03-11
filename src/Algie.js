function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_few_of(array) {
  if(_.isArray(array)) {
    var counter = 0;
    _.each(array, function(value){
      if(value === true) {
        counter = counter + 1;
      }
    })
    if(counter === array.length){
      return false;
    }
    else if (_.includes(array, true)) {
      return true;
    }
    else {
      return false;
    }    
  }
  else {
    return false;
  }
}
