function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_last_will_be_first(array) {
  var temp1 = _.last(array)
  var temp2 = _.first(array)
  array[array.length - 1] = temp2
  array[0] = temp1
  return array
  console.log(array)
}

algie_last_will_be_first([12, 45, 8, 22, 89])
