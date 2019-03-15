function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_print_to_zero(number) {
  var result=[];
  console.log(number)
  for(var i = 0; i < number; i++) {
    console.log(i)
    result[i] = i
  }
  console.log(_.reverse(result))
}

algie_print_to_zero(5)
