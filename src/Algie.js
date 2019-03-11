function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_before_max(array) {
  var newArray = _.sortBy(array)
  console.log(newArray)
}

algie_before_max([1, 5, 4, 3, 65, 23, 42, 55, 12])
