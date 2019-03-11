function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_ordinal_suffix(number){
  if(_.isInteger(number)) {
    var lastOne = number.toString().split('').pop();
    if(lastOne === '1') {
      return 'st'
    }
    if(lastOne === '2') {
      return 'nd'
    }
    if(lastOne === '3') {
      return 'rd'
    }
    if(lastOne === '4' || lastOne === '7' || lastOne === '9') {
      return 'th'
    }     
  }
  else
    return ''

}
