function algie_robust_array(array) {
  if(_.isArray(array)) {
    var res = false
    var temp1 = array
    var sum = 0
    _.each(temp1, function(value,key){
      console.log("temp1")
      console.log(temp1)
      _.pullAt(temp1, 0)
      sum = _.reduce(temp1, function(sum, n) { return sum + n; }, 0)
      console.log("value") 
      console.log(value) 
      if (value > sum) {
        console.log("true")
        return true
      }
      else {
        console.log("false")
        return false
      }
    })
  }
  else {
    return false
  }
}

algie_robust_array([7, 3, 2])
