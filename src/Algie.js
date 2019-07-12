function algie_robust_array(array) {
  if(_.isArray(array)) {
    res = false
    temp1 = array
    temp2 = 0
    _.each(array, function(value,key){
      temp2 = array[key]
      _.pullAt(temp1, 0)
      console.log(temp1)
      res = _.reduce(temp1, function(sum, n) { return sum + n; }, 0) 
      console.log(res)
      return res
    })
    
  }
  return false
}

algie_robust_array([7, 3, 2])
