function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_element_after(array, elementAfterIt) {
  if (_.isArray(array) && _.isInteger(elementAfterIt) && (_.indexOf(array, elementAfterIt) === array.length - 1)) {
      return array[0];
  }
  else if(_.isArray(array) && _.isInteger(elementAfterIt)) {
    indexOfElement = _.indexOf(array, elementAfterIt);
    return array[indexOfElement + 1] ;
  }
  else {
    return false;
  }
}

