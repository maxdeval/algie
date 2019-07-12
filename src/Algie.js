function algie_robust_array(array) {
  if(_.isArray(array)) {
    res = false
    _.each(array, function(value,key){
      res = _.reduce(array, function(sum, key) { return sum + key; }, 0) 
      console.log(res)
    })
    return res
  }
  return false
}

algie_robust_array([7, 3, 2])
