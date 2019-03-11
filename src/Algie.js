function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

var argumentToHide = 423

function algie_hide_that(argumentToHide) {
  if(_.isInteger(argumentToHide) || _.isString(argumentToHide) || _.isRegExp(argumentToHide)) {
    var argumentSplited = argumentToHide.toString().split('')
    for(var i = 1; i < argumentSplited.length - 1; i++){
      argumentSplited[i] = '*'
    }
    //var test = _.replace(_.toString(argumentSplited), ',', '')
    var test = (_.join(argumentSplited, ''))
    console.log(_.isString(test))
    console.log(test)
    return test
  }
}



algie_hide_that(argumentToHide)


