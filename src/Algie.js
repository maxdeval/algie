function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_last_will_be_first(array) {
  var temp1 = _.last(array)
  var temp2 = _.first(array)
  _.last(array) = temp2
  _.first(array) = temp1
  console.log(array)
}
