function algie_ordinal_suffix(number){
  if(_.isInteger(number)) {
    var lastOne = number.toString().split('').pop();
    console.log(lastOne)
    if(lastOne === '1') {
      return 'st'
    }
    if(lastOne === '2') {
      return 'nd'
    }
    if(lastOne === '3') {
      return 'rd'
    }
    if(lastOne === '4' || lastOne === '7' || lastOne === '9') {
      return 'th'
    }     
  }
  else {
    return ''
  }
}

algie_ordinal_suffix(141)
