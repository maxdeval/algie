function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_add2_dates(date1, date2) {
  if (_.isDate(date1) && _.isDate(date2) ){
    day1 = date1.getDay()
    day2 = date2.getDay()
    month1 = date1.getMonth()
    month2 = date2.getMonth()
    if(day1 === day2 && month1 === month2){
      result = date1
      year1 = date2.getFullYear()
      year2 = date1.getFullYear()
      finalYear = year1+year2
      result.setFullYear(finalYear)
      return result      
    }
  }
  else {
    return false
  }
}

