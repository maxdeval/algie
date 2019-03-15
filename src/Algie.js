function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_add2_dates(date1, date2) {
  result = date1
  year1 = date2.getFullYear()
  year2 = date1.getFullYear()
  finalYear = year1+year2
  result.setFullYear(finalYear)
  return result
}

algie_add2_dates(new Date('January 1, 2000 00:00:01'), new Date('January 1, 2000 00:00:01'))
