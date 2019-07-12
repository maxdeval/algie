function algie_robust_array(array) {
  if(_.isArray(array)) {
    res = false
    res = _.reduce(array, function(sum, n) {
      return sum + n;
    }, 0);
    return res
  }
  return false
}

algie_robust_array([7, 3, 2])
