function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_print_to_zero(number) {
  var result=[];
  for(var i = 0; i < number; i++) {
    result[i] = i
  }
  return _.toInteger(_.join(_.reverse(result), ''))
}

algie_print_to_zero(5)
