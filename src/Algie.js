function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_numbers_after(number) {
  var result = [];
  var sum = number;
  result[0] = number
  for(var i=0; i<6; i++) {
    result[i] = result[i - 1] + 1
  }
  console.log(result)
}

algie_numbers_after(23)
