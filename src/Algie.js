function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_closest_of2000(array) {
  var myDate = new Date('January 1, 2000')
  var closest = Infinity;
  array.forEach(function(d) {
   var date = new Date(array);
   if (date >= myDate && date < closest) {
      closest = d;
   }
  })
  return closest
}

algie_closest_of2000([new Date('March 13, 2006 03:24:00'), new Date('June 13, 1995 03:24:00'), new Date('December 8, 2012 03:24:00'), new Date('May 3, 2019 03:24:00')])
