function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_cut_and_multiply_number(number) {
  var splittedNumber = _.map(number.toString().split(''), function(value){
    return _.toInteger(value)
  })
  console.log(splittedNumber)
}

algie_cut_and_multiply_number(42)
