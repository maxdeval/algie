function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

var falsyValues = [false, null, undefined, 0, NaN, '']
var truthyValues = ['0', 'false', [], {}]

function algie_none_of(array) {
  if (!(_.includes(array, true))) {
    return true 
  }
  else if (_.includes(array, true)) {
    return false
  }
/*  else if (_.includes(array, falsyValues)) {
    return true
  }*/
}

