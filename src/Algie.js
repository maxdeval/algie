function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_nice_draw(string1, string2, number) {
  var i = 0;
  var result = [];
  while (i < number) {
    i++
    if(i < number){
      result.push(string1)
      if(i < number){
        i++
        console.log(i)
        result.push(string2)}
    }
  }
  return _.join(result, '')
}

algie_nice_draw("o", "a", 3)
