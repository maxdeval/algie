function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

number = 141
function algie_ordinal_suffix(number){
    var lastOne = number.toString().split('').pop();
    if(lastOne === '1') {
      return 'st'
    }
    if(lastOne === '2') {
      return 'nd'
    }

}

algie_ordinal_suffix(141)
