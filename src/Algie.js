function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_simplify_word(string) {
  var stringSplited = string.toString().split('')
  var counter = 0
  var result = [];
  _.each(stringSplited, function(value){
    counter = counter + 1
  })
  result[0] = _.first(stringSplited)
  result[1] = counter - 2;
  result[2] = _.last(stringSplited)
  return _.join(result, '')
}

algie_simplify_word("accessibility")
