function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_initials(string) {
  if(_.isString(string)){
    splittedString = _.split(string, " ")
    return _.join(_.map(splittedString, function(element) {
      return element.substring(0,1).toUpperCase();
    }), '')
  }
  else {
    return false
  }
}

algie_initials("One great journey")

