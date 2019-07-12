function algie_actual_matches(array1, array2) {
  var res = ""
  if (_.isArray(array1) && _.isArray(array2)) {
    if(array1.length != array2.length) {
      return "size error"
    }

  if (_.isEmpty(_.xor(array1, array2))) {
    return array1.length + " exact match and 0 incorrect match"
  }

  var counter = 0;
  for(var i = 0; i < array1.length; i++) {
    if (_.isInteger(array1[i]) && _.isInteger(array2[i])) {
      if(array1[i] === array2[i]) {
        counter += 1
      }
      else {
        return "wrong type of argument"
      }
    }
  }

  var incorrect = array1.length - _.toInteger(_.difference(array1, array2).length)
     return counter + " exact match and " + incorrect + " incorrect match"
  }
}

algie_actual_matches([1, "bbbb", 2, 1, "aa"], [1, 3, 3, 4, 5])
