function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_hide_that(argumentToHide) {
  if(_.isInteger(argumentToHide) || _.isString(argumentToHide) || _.isRegExp(argumentToHide)) {
    var argumentSplited = argumentToHide.toString().split('')
    console.log(argumentSplited)
    for(var i = 1; i < argumentSplited.length - 1; i++){
      if(argumentSplited[i] === '^') {
        argumentSplited[i] = ''
      }
      else {
        argumentSplited[i] = '*'
      }
    }
    return (_.join(argumentSplited, ''))
  }
  else {
    return false
  }
}



