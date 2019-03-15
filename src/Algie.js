function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_print_to_zero(number) {
  if(_.isInteger(number)){
    var result=[];
    if(number >= 0){
      for(var i = 0; i < number; i++) {
        result[i] = i
      }
      return _.toInteger(_.join(_.reverse(result), ''))
    }
    else if(number < 0){
      for(var i = number; i < 1; i++) {
        result[-i] = i;
      }
      result.pop()
      return _.join(_.reverse(result), '')  
    }
  }
  else {
    return false
  }
}

algie_print_to_zero(-12)
