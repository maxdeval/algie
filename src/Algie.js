function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};


function algie_string_weight(string){
  if (_.isString(string)) {
    var deburr_lower = _.deburr(_.lowerCase(string))
    var alphabetic = deburr_lower.replace(/[^a-zA-Z\b]/g, "") 
    var all = "abcdefghijklmnopqrstuvwxyz"
    var splittedString = all.split("")
    var object = {}
    _.each(splittedString, function(value, index){ 
        object[value] = index + 1
    })
    var alphabetic_detach = alphabetic.split("")
   var numerics = _.map(alphabetic_detach, function(e) {return object[e]})
    return _.reduce(numerics, function(sum, n) {
      return sum + n;
    }, 0);
  }
  else {
    return 0
  }
}
