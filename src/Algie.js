function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_insert_everywhere(string, stringToInsert) {
  if(_.isString(string) && _.isString(stringToInsert)) {
    var result = [];
    stringIntoArray = _.toArray(string);
    _.each(stringIntoArray, function(value, key) {
      //We add the string for each value of the array
      result[key] = stringToInsert + stringIntoArray[key];
    })
    result[result.length] = stringToInsert;
    return _.toString(_.join(result, ''));
  }
  else {
    return false;
  }
}


