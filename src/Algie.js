function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_initials(string) {
  test = _.split(string, " ")
  console.log(_.map(test, function(element) {
    return element.substring(0,1).toUpperCase();
  }))
}

algie_initials("One great journey")

