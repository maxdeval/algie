function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_find_multiplicators(number) {
  if(_.isInteger(number)){
    if (number < 1)
      throw "Argument error";
    var small = [];
    var large = [];
    var end = Math.floor(Math.sqrt(number));
    for (var i = 1; i <= end; i++) {
      if (number % i == 0) {
        small.push(i);
        if (i * i != number)
          large.push(number / i);
      }
    }
    large.reverse();
    small = small.concat(large);
    small.pop()
    small.shift()
    return _.reverse(small)
  }
  else {
    return false;
  }
}
