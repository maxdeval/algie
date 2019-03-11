function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_complete_with(initialArray, untilThisSize, constantToInsert) {
  if(_.isArray(initialArray) && _.isInteger(untilThisSize)) {
    if (initialArray.length < untilThisSize) {
      var arrayOfConstantToInsert = [];
      arrayOfConstantToInsert.length = untilThisSize - initialArray.length;
      arrayOfConstantToInsert = _.fill(arrayOfConstantToInsert, constantToInsert, 0, arrayOfConstantToInsert.length);
      return _.concat(initialArray, arrayOfConstantToInsert)
    } 
    else {
      return initialArray;
    }
  }
  else {
    return false;
  }
}

